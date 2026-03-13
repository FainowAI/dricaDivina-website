import { ArrowRight, Building2, Mail, Phone, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { AnimatedScribble } from "@/components/AnimatedScribble";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = "https://fonpnogwwrqjhzahcbge.supabase.co";

const formatCNPJ = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
};

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 10) {
    return digits
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
  return digits
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
};

/**
 * Validação de CNPJ usando o algoritmo oficial dos dígitos verificadores
 * Referência: https://www.geradorcnpj.com/javascript-validar-cnpj.htm
 *
 * O algoritmo multiplica os 12 primeiros dígitos pelas posições 5,4,3,2,9,8,7,6,5,4,3,2
 * e calcula o primeiro dígito verificador. Depois multiplica os 13 primeiros dígitos
 * pelas posições 6,5,4,3,2,9,8,7,6,5,4,3,2 para calcular o segundo dígito verificador.
 */
const validateCNPJ = (cnpj: string): boolean => {
  // Remove caracteres não numéricos
  const digits = cnpj.replace(/\D/g, "");

  // Verifica se tem 14 dígitos
  if (digits.length !== 14) return false;

  // Verifica se todos os dígitos são iguais (CNPJs inválidos conhecidos)
  if (/^(\d)\1+$/.test(digits)) return false;

  // Calcula o primeiro dígito verificador
  let sum = 0;
  let weight = 5;

  for (let i = 0; i < 12; i++) {
    sum += parseInt(digits.charAt(i)) * weight;
    weight = weight === 2 ? 9 : weight - 1;
  }

  let remainder = sum % 11;
  const firstDigit = remainder < 2 ? 0 : 11 - remainder;

  // Verifica o primeiro dígito
  if (firstDigit !== parseInt(digits.charAt(12))) return false;

  // Calcula o segundo dígito verificador
  sum = 0;
  weight = 6;

  for (let i = 0; i < 13; i++) {
    sum += parseInt(digits.charAt(i)) * weight;
    weight = weight === 2 ? 9 : weight - 1;
  }

  remainder = sum % 11;
  const secondDigit = remainder < 2 ? 0 : 11 - remainder;

  // Verifica o segundo dígito
  return secondDigit === parseInt(digits.charAt(13));
};

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 11;
};

interface BusinessContactFormProps {
  variant?: "top" | "bottom";
}

const BusinessContactForm = ({ variant = "top" }: BusinessContactFormProps) => {
  const { toast } = useToast();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validações
    if (!companyName || !email || !phone || !cnpj) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    if (companyName.length < 2) {
      toast({
        title: "Nome inválido",
        description: "Por favor, insira o nome da empresa.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    if (!validatePhone(phone)) {
      toast({
        title: "Telefone inválido",
        description: "Por favor, insira um telefone válido.",
        variant: "destructive",
      });
      return;
    }

    if (!validateCNPJ(cnpj)) {
      toast({
        title: "CNPJ inválido",
        description: "Por favor, insira um CNPJ válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Insere no banco de dados
      const { data, error } = await supabase
        .from("business_contacts")
        .insert({
          company_name: companyName,
          email: email,
          phone: phone,
          cnpj: cnpj,
          form_variant: variant,
        })
        .select()
        .single();

      if (error) {
        console.error("Supabase error:", error);
        throw new Error("Erro ao salvar dados");
      }

      // Envia email de notificação via Edge Function
      try {
        await fetch(`${SUPABASE_URL}/functions/v1/send-business-contact-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company_name: companyName,
            email: email,
            phone: phone,
            cnpj: cnpj,
            form_variant: variant,
            created_at: data.created_at,
          }),
        });
      } catch (emailError) {
        // Não falha se o email não foi enviado, pois os dados já foram salvos
        console.error("Email notification error:", emailError);
      }

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve para discutir parcerias.",
        duration: 5000,
      });

      // Limpa o formulário
      setCompanyName("");
      setEmail("");
      setPhone("");
      setCnpj("");
    } catch (error) {
      console.error("Submit error:", error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-orange-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-white blur-3xl"></div>
      </div>

      <AnimatedScribble pathName="newsletter" className="opacity-20 text-white" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-white" />
              <span className="text-white font-semibold text-sm uppercase tracking-wider">
                Para Empresas
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5 lg:mb-6">
              {variant === "top"
                ? "Quer fechar parceria com a Drica?"
                : "Vamos trabalhar juntos?"}
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg leading-relaxed mb-7 md:mb-9 lg:mb-10 text-white/95">
              {variant === "top"
                ? "Sua marca pode fazer parte da maior comunidade de beleza madura do Brasil. Entre em contato para parcerias, palestras e campanhas."
                : "Palestras, campanhas publicitárias, parcerias de marca. Entre em contato e descubra como a Drica pode amplificar sua mensagem."}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
              {/* Nome da Empresa */}
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
                <Input
                  type="text"
                  placeholder="Nome da empresa"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="h-12 md:h-14 text-sm md:text-base border-2 border-white/30 bg-white/95 backdrop-blur-sm pl-12 pr-4 focus:border-white focus:bg-white transition-all placeholder:text-foreground/50"
                  aria-label="Nome da empresa"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
                <Input
                  type="email"
                  placeholder="Email corporativo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 md:h-14 text-sm md:text-base border-2 border-white/30 bg-white/95 backdrop-blur-sm pl-12 pr-4 focus:border-white focus:bg-white transition-all placeholder:text-foreground/50"
                  aria-label="Email corporativo"
                />
              </div>

              {/* Telefone */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
                <Input
                  type="tel"
                  placeholder="Telefone"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  className="h-12 md:h-14 text-sm md:text-base border-2 border-white/30 bg-white/95 backdrop-blur-sm pl-12 pr-4 focus:border-white focus:bg-white transition-all placeholder:text-foreground/50"
                  aria-label="Telefone"
                />
              </div>

              {/* CNPJ */}
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
                <Input
                  type="text"
                  placeholder="CNPJ"
                  value={cnpj}
                  onChange={(e) => setCnpj(formatCNPJ(e.target.value))}
                  className="h-12 md:h-14 text-sm md:text-base border-2 border-white/30 bg-white/95 backdrop-blur-sm pl-12 pr-4 focus:border-white focus:bg-white transition-all placeholder:text-foreground/50"
                  aria-label="CNPJ"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 md:h-14 rounded-full bg-white text-orange-vibrant flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300 shadow-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>Enviar mensagem</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default BusinessContactForm;
