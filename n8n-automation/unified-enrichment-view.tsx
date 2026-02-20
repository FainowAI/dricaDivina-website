{
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "weeks"
            }
          ]
        }
      },
      "id": "schedule-trigger",
      "name": "Agenda (a cada 3 dias)",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.3,
      "position": [
        -208,
        288
      ]
    },
    {
      "parameters": {
        "operation": "getAll",
        "tableId": "categories",
        "returnAll": true,
        "filterType": "string",
        "filterString": "is_active=eq.true&order=order_index.asc&select=id,name,slug,description,subcategories(id,name,slug)"
      },
      "id": "buscar-categorias",
      "name": "Buscar Categorias",
      "type": "n8n-nodes-base.supabase",
      "typeVersion": 1,
      "position": [
        224,
        192
      ],
      "credentials": {
        "supabaseApi": {
          "id": "iOMfzXBI3IioKhri",
          "name": "[DricaDivina]"
        }
      }
    },
    {
      "parameters": {
        "operation": "getAll",
        "tableId": "posts",
        "returnAll": true,
        "filterType": "string",
        "filterString": "=created_at=gte.{{ new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString() }}&select=category_id,categories(slug)"
      },
      "id": "posts-do-mes",
      "name": "Posts do Mês",
      "type": "n8n-nodes-base.supabase",
      "typeVersion": 1,
      "position": [
        224,
        384
      ],
      "alwaysOutputData": true,
      "credentials": {
        "supabaseApi": {
          "id": "iOMfzXBI3IioKhri",
          "name": "[DricaDivina]"
        }
      }
    },
    {
      "parameters": {
        "jsCode": "// Recebe categorias e posts do mês via nodes nativos do Supabase\n// Usa try/catch para lidar com execução parcial\nlet categoriesItems = [];\nlet postsItems = [];\n\ntry { categoriesItems = $('Buscar Categorias').all(); } catch(e) { categoriesItems = []; }\ntry { postsItems = $('Posts do Mês').all(); } catch(e) { postsItems = []; }\n\nconst TARGET_PER_MONTH = 10;\n\nconst catArray = categoriesItems.map(item => item.json);\nconst postsArray = postsItems.map(item => item.json);\n\n// Se não tem categorias ainda, aguarda\nif (catArray.length === 0) {\n  return [];\n}\n\n// Contar posts por categoria\nconst counts = {};\nfor (const post of postsArray) {\n  const slug = post.categories?.slug || 'unknown';\n  counts[slug] = (counts[slug] || 0) + 1;\n}\n\n// Encontrar categoria com menos posts\nlet selectedCategory = null;\nlet minCount = TARGET_PER_MONTH;\n\nfor (const cat of catArray) {\n  const currentCount = counts[cat.slug] || 0;\n  if (currentCount < minCount) {\n    minCount = currentCount;\n    selectedCategory = cat;\n  }\n}\n\nif (!selectedCategory) {\n  return []; // Todas categorias atingiram meta\n}\n\n// Subcategoria aleatória\nconst subs = selectedCategory.subcategories || [];\nconst randomSub = subs.length > 0 ? subs[Math.floor(Math.random() * subs.length)] : null;\n\n// Temas de pesquisa por categoria\nconst topics = {\n  'moda': ['tendências moda feminina 50+', 'looks elegantes mulher madura', 'moda atemporal mulher 50', 'acessórios moda madura', 'capsule wardrobe mulher madura', 'como se vestir bem depois dos 50', 'estilo clássico feminino', 'moda praia mulher madura', 'cores da estação moda', 'moda sustentável feminina'],\n  'beleza': ['skincare pele madura', 'maquiagem anti-idade', 'cuidados cabelo 50+', 'tratamentos rejuvenescimento', 'rotina beleza madura', 'cremes anti-idade', 'maquiagem pele madura', 'cabelos grisalhos tendência', 'protetor solar pele madura', 'ácido hialurônico benefícios'],\n  'viagem': ['destinos viagem Brasil 50+', 'roteiros europa madura', 'viagem solo mulher dicas', 'spas resorts Brasil', 'gastronomia viagem', 'destinos tranquilos férias', 'cruzeiros mulheres 50+', 'turismo cultural', 'wellness retreat', 'dicas viagem internacional'],\n  'saude': ['saúde mulher menopausa', 'exercícios mulher 50+', 'nutrição mulher madura', 'saúde mental feminino', 'yoga pilates 50+', 'alimentação anti-inflamatória', 'sono qualidade madura', 'check-up feminina 50+', 'suplementos mulher madura', 'prevenção osteoporose'],\n  'blog': ['empoderamento feminino 50+', 'reinvenção profissional madura', 'finanças pessoais mulher 50+', 'relacionamentos maduros', 'cultura livros mulher madura', 'empreendedorismo feminino', 'autoconhecimento madura', 'tecnologia mulher 50+', 'hobbies mulher madura', 'propósito vida madura']\n};\n\nconst catTopics = topics[selectedCategory.slug] || topics['blog'];\nconst randomTopic = catTopics[Math.floor(Math.random() * catTopics.length)];\n\nconst imgKw = {\n  'moda': 'elegant mature woman fashion style',\n  'beleza': 'mature woman beauty skincare',\n  'viagem': 'beautiful travel destination landscape',\n  'saude': 'mature woman wellness yoga',\n  'blog': 'elegant mature woman lifestyle reading'\n};\n\nreturn [{\n  json: {\n    category: selectedCategory,\n    subcategory: randomSub,\n    searchTopic: randomTopic,\n    imageQuery: imgKw[selectedCategory.slug] || 'elegant mature woman lifestyle',\n    postsThisMonth: minCount,\n    targetPerMonth: TARGET_PER_MONTH\n  }\n}];"
      },
      "id": "selecionar-categoria",
      "name": "Selecionar Categoria",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        448,
        288
      ]
    },
    {
      "parameters": {
        "jsCode": "// Em vez de buscar noticias externas, usa o proprio Gemini via AI Agent\n// Aqui apenas preparamos o contexto para o proximo node\nconst catData = $input.first().json;\n\n// O contexto sera gerado pelo Gemini no AI Agent\n// Passamos instrucoes para ele pesquisar internamente\nreturn [{\n  json: {\n    ...catData,\n    newsContext: `PESQUISE E INCLUA no artigo tendencias e informacoes atuais sobre: ${catData.searchTopic}. Use seu conhecimento para citar dados relevantes, estudos ou tendencias recentes relacionadas ao tema para mulheres 50+.`\n  }\n}];"
      },
      "id": "pesquisar-noticias",
      "name": "Gerar Contexto (Gemini)",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        896,
        288
      ],
      "onError": "continueRegularOutput"
    },
    {
      "parameters": {
        "url": "=https://api.pexels.com/v1/search?query={{ encodeURIComponent($('Selecionar Categoria').first().json.imageQuery) }}&per_page=10&orientation=landscape",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            {
              "name": "Authorization",
              "value": "={{ $('variables').first().json['PEXELS_API_KEY '] }}"
            }
          ]
        },
        "options": {}
      },
      "id": "buscar-imagens",
      "name": "Buscar Imagens (Pexels)",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.4,
      "position": [
        672,
        288
      ],
      "onError": "continueRegularOutput"
    },
    {
      "parameters": {
        "jsCode": "const catData = $('Selecionar Categoria').first().json;\nconst imgResp = $('Buscar Imagens (Pexels)').first().json;\nconst contextoData = $('Gerar Contexto (Gemini)').first().json;\n\nconst newsContext = contextoData.newsContext || `Gere conteúdo relevante e atual sobre: ${catData.searchTopic} para mulheres 50+.`;\n\nlet img1 = 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1200';\nlet img2 = 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1200';\nlet alt1 = catData.category.name;\nlet alt2 = catData.category.name;\n\nif (imgResp?.photos?.length >= 2) {\n  const shuffled = imgResp.photos.sort(() => 0.5 - Math.random());\n  img1 = shuffled[0].src.large2x || shuffled[0].src.large;\n  img2 = shuffled[1].src.large2x || shuffled[1].src.large;\n  alt1 = shuffled[0].alt || catData.category.name;\n  alt2 = shuffled[1].alt || catData.category.name;\n}\n\nreturn [{ json: { ...catData, newsContext, image1: img1, image2: img2, image1Alt: alt1, image2Alt: alt2, subcategoryName: catData.subcategory?.name || 'Geral' } }];"
      },
      "id": "preparar-contexto",
      "name": "Preparar Contexto",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        1120,
        288
      ]
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "=Crie um artigo COMPLETO para o blog da Drica Divina sobre o tema abaixo.\n\n**Categoria:** {{ $json.category.name }}\n**Subcategoria:** {{ $json.subcategoryName }}\n**Tema:** {{ $json.searchTopic }}\n**Instrução de pesquisa:** {{ $json.newsContext }}\n\n---\n\n**ESTRUTURA OBRIGATÓRIA DO ARTIGO:**\n\n1. **Introdução** (2-3 parágrafos envolventes, apresente o tema e conecte com a leitora de 50+)\n2. **Seção 1** com `<h2>` — primeiro subtópico prático\n3. **[IMAGEM 1 AQUI]** — inserir exatamente: `<figure class=\"my-8\"><img src=\"{{ $json.image1 }}\" alt=\"{{ $json.image1Alt }}\" style=\"max-width:100%; height:auto; border-radius:8px;\" /><figcaption style=\"font-size:13px; color:#666; margin-top:6px;\">{{ $json.image1Alt }}</figcaption></figure>`\n4. **Seção 2** com `<h2>` — segundo subtópico prático\n5. **Seção 3** com `<h2>` — terceiro subtópico (pode usar `<h3>` internamente)\n6. **[IMAGEM 2 AQUI]** — inserir exatamente: `<figure class=\"my-8\"><img src=\"{{ $json.image2 }}\" alt=\"{{ $json.image2Alt }}\" style=\"max-width:100%; height:auto; border-radius:8px;\" /><figcaption style=\"font-size:13px; color:#666; margin-top:6px;\">{{ $json.image2Alt }}</figcaption></figure>`\n7. **Seção 4** com `<h2>` — quarto subtópico ou dicas extras\n8. **Conclusão** — parágrafo final empoderador, convite à ação ou reflexão\n\n**REGRAS DE ESCRITA:**\n- Total entre 900-1300 palavras\n- HTML válido: use `<p>`, `<h2>`, `<h3>`, `<strong>`, `<em>`, `<ul>`, `<li>`, `<blockquote>`\n- Tom: conversa entre amigas sofisticadas, caloroso, empoderador\n- Público: mulheres brasileiras 50+\n- Inclua dados, estudos ou tendências reais sobre o tema\n- Máximo 2 emojis no artigo inteiro\n- NÃO use classes Tailwind nas imagens — use style inline conforme indicado acima\n\n**RETORNE O JSON EXATAMENTE NESTE FORMATO (sem markdown, sem blocos de código):**\n{\n  \"title\": \"Título SEO-friendly atraente (máx 70 chars)\",\n  \"summary\": \"Resumo envolvente que convida a leitura (máx 160 chars)\",\n  \"content\": \"<p>HTML completo do artigo com todas as 8 seções e 2 imagens embutidas...</p>\",\n  \"tags\": [\"tag1\", \"tag2\", \"tag3\", \"tag4\", \"tag5\"],\n  \"meta_title\": \"Título para SEO (máx 60 chars)\",\n  \"meta_description\": \"Meta description para Google (máx 155 chars)\"\n}",
        "hasOutputParser": true,
        "options": {
          "systemMessage": "Se o post for igual a beleza use a ferramenta de imagem do nano banana"
        }
      },
      "id": "ai-agent",
      "name": "AI Agent - Gerar Artigo",
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 3.1,
      "position": [
        1296,
        288
      ]
    },
    {
      "parameters": {
        "jsCode": "const agentOutput = $input.first().json;\nconst ctx = $('Preparar Contexto').first().json;\n\nlet article = null;\nconst debugInfo = { outputKeys: Object.keys(agentOutput), outputType: typeof agentOutput.output };\n\n// ─── Estratégia 1: Structured Output Parser funcionou (campos diretos) ───\nif (agentOutput.title && agentOutput.content && agentOutput.content.length > 200) {\n  article = agentOutput;\n  debugInfo.source = 'direct_fields';\n}\n\n// ─── Estratégia 2: output é string — tenta JSON.parse normal ───\nif (!article && typeof agentOutput.output === 'string') {\n  const raw = agentOutput.output.trim()\n    .replace(/^```(?:json)?\\s*/i, '')\n    .replace(/\\s*```$/i, '');\n  \n  const firstBrace = raw.indexOf('{');\n  const lastBrace = raw.lastIndexOf('}');\n  \n  if (firstBrace !== -1 && lastBrace !== -1) {\n    const candidate = raw.substring(firstBrace, lastBrace + 1);\n    \n    // Tenta parse direto primeiro\n    try {\n      const parsed = JSON.parse(candidate);\n      if (parsed.title && parsed.content && parsed.content.length > 200) {\n        article = parsed;\n        debugInfo.source = 'json_parse_direct';\n      }\n    } catch(e1) {\n      debugInfo.parseError = e1.message;\n      \n      // ─── Estratégia 3: JSON quebrado por HTML — extração campo a campo ───\n      // O Gemini às vezes gera HTML com aspas não escapadas dentro do JSON\n      // Solução: extrair cada campo individualmente por regex\n      try {\n        const extractField = (text, field) => {\n          // Pega o valor depois de \"field\": \"\n          const pattern = new RegExp('\"' + field + '\"\\\\s*:\\\\s*\"');\n          const start = text.search(pattern);\n          if (start === -1) return null;\n          \n          // Avança até depois das aspas de abertura\n          const valueStart = text.indexOf('\"', text.indexOf(':', start) + 1) + 1;\n          \n          // Percorre char a char buscando o fim da string (aspas não escapadas)\n          let i = valueStart;\n          let result = '';\n          while (i < text.length) {\n            if (text[i] === '\\\\') {\n              // caractere escapado: inclui a sequência inteira\n              result += text[i] + (text[i+1] || '');\n              i += 2;\n            } else if (text[i] === '\"') {\n              // fim da string\n              break;\n            } else {\n              result += text[i];\n              i++;\n            }\n          }\n          // Faz unescape das sequências JSON\n          try {\n            return JSON.parse('\"' + result + '\"');\n          } catch(e) {\n            return result;\n          }\n        };\n        \n        // Extrai arrays com regex simples\n        const extractArray = (text, field) => {\n          const pattern = new RegExp('\"' + field + '\"\\\\s*:\\\\s*\\\\[([^\\\\]]+)\\\\]');\n          const m = text.match(pattern);\n          if (!m) return [];\n          return m[1].match(/\"([^\"]+)\"/g)?.map(s => s.replace(/\"/g, '')) || [];\n        };\n        \n        // Para o content, usamos abordagem diferente:\n        // procura \"content\": \"...\" mas captura tudo até a próxima chave de nível raiz\n        const extractContent = (text) => {\n          const marker = '\"content\":';\n          const idx = text.indexOf(marker);\n          if (idx === -1) return null;\n          \n          // Encontra a abertura das aspas do valor\n          let pos = text.indexOf('\"', idx + marker.length);\n          if (pos === -1) return null;\n          pos++; // avança para dentro do valor\n          \n          let content = '';\n          while (pos < text.length) {\n            if (text[pos] === '\\\\') {\n              const next = text[pos+1];\n              if (next === 'n') content += '\\n';\n              else if (next === 't') content += '\\t';\n              else if (next === '\"') content += '\"';\n              else if (next === '\\\\') content += '\\\\';\n              else content += next;\n              pos += 2;\n            } else if (text[pos] === '\"') {\n              // possível fim — verifica se o próximo token não-espaço é , ou }\n              let peek = pos + 1;\n              while (peek < text.length && ' \\t\\r\\n'.includes(text[peek])) peek++;\n              if (text[peek] === ',' || text[peek] === '}') {\n                break; // fim real da string\n              }\n              content += text[pos];\n              pos++;\n            } else {\n              content += text[pos];\n              pos++;\n            }\n          }\n          return content.trim();\n        };\n        \n        const title = extractField(candidate, 'title');\n        const summary = extractField(candidate, 'summary');\n        const content = extractContent(candidate);\n        const meta_title = extractField(candidate, 'meta_title');\n        const meta_description = extractField(candidate, 'meta_description');\n        const tags = extractArray(candidate, 'tags');\n        \n        if (title && content && content.length > 200) {\n          article = { title, summary, content, meta_title, meta_description, tags };\n          debugInfo.source = 'field_extraction_fallback';\n          debugInfo.contentLength = content.length;\n        } else {\n          debugInfo.extractionResult = { titleFound: !!title, contentLength: content?.length || 0 };\n        }\n      } catch(e2) {\n        debugInfo.extractionError = e2.message;\n      }\n    }\n  }\n}\n\n// ─── Estratégia 4: output é objeto direto ───\nif (!article && agentOutput.output && typeof agentOutput.output === 'object') {\n  if (agentOutput.output.title && agentOutput.output.content) {\n    article = agentOutput.output;\n    debugInfo.source = 'output_object';\n  }\n}\n\n// ─── Fallback: retorna debug detalhado ───\nif (!article) {\n  debugInfo.rawOutput = typeof agentOutput.output === 'string' \n    ? agentOutput.output.substring(0, 800)\n    : JSON.stringify(agentOutput).substring(0, 800);\n  \n  return [{ json: {\n    __ERROR: 'AI Agent não retornou conteúdo válido.',\n    __DEBUG: debugInfo,\n    title: `DEBUG: ${ctx.category.name} - ${new Date().toISOString()}`,\n    slug: 'debug-' + Date.now().toString(36),\n    summary: 'ERRO: conteúdo não gerado',\n    content: '<p>Erro ao processar resposta do AI. Debug: ' + JSON.stringify(debugInfo).substring(0, 500) + '</p>',\n    featured_image: ctx.image1,\n    category_id: ctx.category.id,\n    subcategory_id: ctx.subcategory?.id || null,\n    tags: [ctx.category.slug, 'debug'],\n    meta_title: 'DEBUG',\n    meta_description: 'DEBUG',\n    is_featured: false,\n    is_published: false,\n    status: 'debug',\n    views_count: 0\n  }}];\n}\n\n// ─── Monta o post final ───\nconst slug = article.title\n  .toLowerCase()\n  .normalize('NFD').replace(/[\\u0300-\\u036f]/g, '')\n  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')\n  .substring(0, 80) + '-' + Date.now().toString(36);\n\nreturn [{ json: {\n  title: article.title,\n  slug,\n  summary: article.summary || '',\n  content: article.content,\n  featured_image: ctx.image1,\n  category_id: ctx.category.id,\n  subcategory_id: ctx.subcategory?.id || null,\n  tags: Array.isArray(article.tags) && article.tags.length > 0 ? article.tags : [ctx.category.slug],\n  meta_title: article.meta_title || article.title.substring(0, 60),\n  meta_description: article.meta_description || (article.summary || '').substring(0, 155),\n  is_featured: ctx.postsThisMonth === 0,\n  is_published: false,\n  status: 'draft',\n  views_count: 0,\n  __debug: debugInfo\n}}];\n"
      },
      "id": "formatar-post",
      "name": "Formatar Post",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        1600,
        288
      ]
    },
    {
      "parameters": {
        "rules": {
          "values": [
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 1
                },
                "conditions": [
                  {
                    "leftValue": "={{ $json.data.Selecione }}",
                    "rightValue": "publish",
                    "operator": {
                      "type": "string",
                      "operation": "equals"
                    },
                    "id": "cf9ee603-0044-410e-b63a-1bac5126199a"
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "Publicar"
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 1
                },
                "conditions": [
                  {
                    "leftValue": "={{ $json.data.Selecione }}",
                    "rightValue": "new",
                    "operator": {
                      "type": "string",
                      "operation": "equals"
                    },
                    "id": "92fb0d4b-92a3-4113-ac9b-d8ba37f22bd3"
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "Novo Post"
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 1
                },
                "conditions": [
                  {
                    "leftValue": "={{ $json.data.Selecione }}",
                    "rightValue": "update",
                    "operator": {
                      "type": "string",
                      "operation": "equals"
                    },
                    "id": "7137aca1-9178-472f-8cb2-62ce5db5b032"
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "Atualizar"
            }
          ]
        },
        "options": {}
      },
      "id": "roteador-resposta",
      "name": "Roteador de Resposta",
      "type": "n8n-nodes-base.switch",
      "typeVersion": 3,
      "position": [
        2064,
        272
      ]
    },
    {
      "parameters": {
        "tableId": "posts",
        "fieldsUi": {
          "fieldValues": [
            {
              "fieldId": "title",
              "fieldValue": "={{ $json.title }}"
            },
            {
              "fieldId": "slug",
              "fieldValue": "={{ $json.slug }}"
            },
            {
              "fieldId": "summary",
              "fieldValue": "={{ $json.summary }}"
            },
            {
              "fieldId": "content",
              "fieldValue": "={{ $json.content }}"
            },
            {
              "fieldId": "featured_image",
              "fieldValue": "={{ $json.featured_image }}"
            },
            {
              "fieldId": "category_id",
              "fieldValue": "={{ $json.category_id }}"
            },
            {
              "fieldId": "subcategory_id",
              "fieldValue": "={{ $json.subcategory_id }}"
            },
            {
              "fieldId": "status",
              "fieldValue": "={{ $json.status }}"
            },
            {
              "fieldId": "tags",
              "fieldValue": "={{ $json.tags }}"
            },
            {
              "fieldId": "meta_title",
              "fieldValue": "={{ $json.meta_title }}"
            },
            {
              "fieldId": "meta_description",
              "fieldValue": "={{ $json.meta_description }}"
            },
            {
              "fieldId": "is_featured",
              "fieldValue": "={{ $json.is_featured }}"
            },
            {
              "fieldId": "is_published",
              "fieldValue": "={{ $json.is_published }}"
            },
            {
              "fieldId": "views_count",
              "fieldValue": "={{ $json.views_count }}"
            }
          ]
        }
      },
      "id": "inserir-post",
      "name": "Inserir Post no Supabase",
      "type": "n8n-nodes-base.supabase",
      "typeVersion": 1,
      "position": [
        2512,
        96
      ],
      "credentials": {
        "supabaseApi": {
          "id": "iOMfzXBI3IioKhri",
          "name": "[DricaDivina]"
        }
      }
    },
    {
      "parameters": {
        "jsCode": "const result = $input.first().json;\nconst ctx = $('Preparar Contexto').first().json;\n\nreturn [{ json: {\n  success: !!result.id,\n  postId: result.id || 'N/A',\n  title: result.title || 'Erro',\n  slug: result.slug || 'N/A',\n  category: ctx.category.name,\n  subcategory: ctx.subcategoryName,\n  publishedAt: result.published_at || new Date().toISOString(),\n  postsAfter: ctx.postsThisMonth + 1,\n  target: ctx.targetPerMonth,\n  message: result.id ? `Post criado com sucesso: ${ctx.category.name}` : `Erro ao criar post: ${JSON.stringify(result)}`\n} }];"
      },
      "id": "log-resultado",
      "name": "Log Resultado",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        2736,
        96
      ]
    },
    {
      "parameters": {
        "workflowId": {
          "__rl": true,
          "value": "0yhP5beDrBQB9Uuy",
          "mode": "id"
        },
        "options": {
          "waitForSubWorkflow": false
        }
      },
      "id": "reiniciar-fluxo",
      "name": "Gerar Novo Post",
      "type": "n8n-nodes-base.executeWorkflow",
      "typeVersion": 1.1,
      "position": [
        2288,
        288
      ]
    },
    {
      "parameters": {
        "jsCode": "// Encaminha os dados do post para um sub-workflow de atualização/edição\nconst postData = $('Formatar Post').first().json;\n\n// Conecte este nó ao seu workflow de edição com AI Agent\nreturn [{\n  json: {\n    action: 'update',\n    postData,\n    message: 'Post encaminhado para revisão e atualização.',\n    timestamp: new Date().toISOString()\n  }\n}];"
      },
      "id": "preparar-atualizacao",
      "name": "Preparar Atualização",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        2288,
        480
      ]
    },
    {
      "parameters": {
        "options": {
          "maxOutputTokens": 8192,
          "temperature": 0.7
        }
      },
      "id": "064105ad-9194-40f2-b219-e8bc88815b9f",
      "name": "Google Gemini Chat Model",
      "type": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
      "typeVersion": 1,
      "position": [
        1152,
        496
      ],
      "credentials": {
        "googlePalmApi": {
          "id": "vO6MduY93SyAXhz3",
          "name": "[DricaDivina]"
        }
      }
    },
    {
      "parameters": {
        "operation": "sendAndWait",
        "sendTo": "marbergertony@gmail.com",
        "subject": "=✍️ Novo Post Gerado: {{ $json.title }}",
        "message": "=<div style=\"font-family: Georgia, 'Times New Roman', serif; max-width: 680px; margin: 0 auto; color: #333;\">\n\n  <div style=\"background: #c0392b; padding: 20px 24px; border-radius: 8px 8px 0 0;\">\n    <h1 style=\"color: #fff; margin: 0; font-size: 20px; font-family: Arial, sans-serif;\">📝 Revisão de Post — Drica Divina</h1>\n  </div>\n\n  <div style=\"background: #fff; border: 1px solid #e0e0e0; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;\">\n\n    <table style=\"width:100%; border-collapse:collapse; margin-bottom: 24px; font-family: Arial, sans-serif; font-size: 14px;\">\n      <tr style=\"background:#fdf5f5;\">\n        <td style=\"padding:10px 12px; font-weight:bold; color:#c0392b; width:140px; border-bottom:1px solid #f0d0d0;\">Categoria</td>\n        <td style=\"padding:10px 12px; border-bottom:1px solid #f0d0d0;\">{{ $('Preparar Contexto').first().json.category.name }} › {{ $('Preparar Contexto').first().json.subcategoryName }}</td>\n      </tr>\n      <tr>\n        <td style=\"padding:10px 12px; font-weight:bold; color:#c0392b; border-bottom:1px solid #f0e0e0;\">Título</td>\n        <td style=\"padding:10px 12px; border-bottom:1px solid #f0e0e0; font-weight:600;\">{{ $json.title }}</td>\n      </tr>\n      <tr style=\"background:#fdf5f5;\">\n        <td style=\"padding:10px 12px; font-weight:bold; color:#c0392b; border-bottom:1px solid #f0d0d0;\">Resumo</td>\n        <td style=\"padding:10px 12px; border-bottom:1px solid #f0d0d0;\">{{ $json.summary }}</td>\n      </tr>\n      <tr>\n        <td style=\"padding:10px 12px; font-weight:bold; color:#c0392b; border-bottom:1px solid #f0e0e0;\">Tags</td>\n        <td style=\"padding:10px 12px; border-bottom:1px solid #f0e0e0;\">{{ $json.tags.join(' · ') }}</td>\n      </tr>\n      <tr style=\"background:#fdf5f5;\">\n        <td style=\"padding:10px 12px; font-weight:bold; color:#c0392b;\">Meta Description</td>\n        <td style=\"padding:10px 12px; font-size:13px; color:#555;\">{{ $json.meta_description }}</td>\n      </tr>\n    </table>\n\n    <h3 style=\"font-family: Arial, sans-serif; color: #c0392b; border-bottom: 2px solid #f0d0d0; padding-bottom: 8px; margin-top: 0;\">📄 Preview do Conteúdo</h3>\n\n    <div style=\"border: 1px solid #e8e8e8; border-radius: 8px; padding: 24px; background: #fafafa; font-size: 15px; line-height: 1.8; color: #333;\">\n      <style>\n        .post-preview img { max-width: 100% !important; height: auto !important; border-radius: 6px; display: block; margin: 16px auto; }\n        .post-preview h2 { color: #c0392b; font-size: 18px; margin-top: 24px; }\n        .post-preview h3 { color: #555; font-size: 16px; }\n        .post-preview figure { margin: 16px 0; }\n        .post-preview figcaption { font-size: 12px; color: #888; text-align: center; margin-top: 4px; }\n        .post-preview blockquote { border-left: 3px solid #c0392b; padding-left: 16px; color: #666; font-style: italic; }\n      </style>\n      <div class=\"post-preview\">\n        {{ $json.content }}\n      </div>\n    </div>\n\n  </div>\n\n</div>",
        "responseType": "customForm",
        "formFields": {
          "values": [
            {
              "fieldLabel": "Selecione",
              "fieldType": "dropdown",
              "defaultValue": "Aprovar",
              "fieldOptions": {
                "values": [
                  {
                    "option": "publish"
                  },
                  {
                    "option": "new"
                  },
                  {
                    "option": "update"
                  }
                ]
              }
            }
          ]
        },
        "options": {
          "appendAttribution": false
        }
      },
      "type": "n8n-nodes-base.gmail",
      "typeVersion": 2.1,
      "position": [
        1824,
        288
      ],
      "id": "dac7e3c2-9ce1-422a-960c-343ca4ea293d",
      "name": "Aprovação do Post",
      "webhookId": "fd673aee-cad6-4a45-bb47-35077720c093",
      "credentials": {
        "gmailOAuth2": {
          "id": "mLh7C7eA5dBVENTX",
          "name": "dricaDivina"
        }
      }
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "eeefd9bf-c3ba-429f-aa76-c52077deaf3c",
              "name": "google_api_key",
              "value": "AIzaSyD87rsieJNBJEIA8ZQXDctwuLwNcXK1IzI",
              "type": "string"
            },
            {
              "id": "82df50c5-ca55-4245-999c-e2e0d0b3de47",
              "name": "google_cse_id",
              "value": "36e631ac19a4245fc",
              "type": "string"
            },
            {
              "id": "89e88d1a-be8d-4832-9936-ddaea0a922e3",
              "name": "PEXELS_API_KEY ",
              "value": "5eb3bQdzOrb1Kjtfl0zfIos3nHPC5gPxfQatP4WfOhwdzYyABRBxpC27",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        0,
        288
      ],
      "id": "888861fc-330f-4ec0-9966-8e9a63c53f85",
      "name": "variables"
    },
    {
      "parameters": {},
      "type": "n8n-nodes-base.manualTrigger",
      "typeVersion": 1,
      "position": [
        -192,
        464
      ],
      "id": "2f04d7db-e24d-4d48-94d8-4c297614cbb6",
      "name": "When clicking ‘Execute workflow’"
    },
    {
      "parameters": {
        "jsCode": "// O $json aqui vem do Roteador (output do Gmail)\n// Precisamos pegar os dados do Formatar Post\nconst post = $('Formatar Post').first().json;\n\n// Garante que todos os campos obrigatórios existem\nif (!post.title) {\n  throw new Error('Formatar Post não retornou title. Dados: ' + JSON.stringify(Object.keys(post)));\n}\n\nreturn [{ json: {\n  title: post.title,\n  slug: post.slug,\n  summary: post.summary || '',\n  content: post.content,\n  featured_image: post.featured_image || null,\n  category_id: post.category_id,\n  subcategory_id: post.subcategory_id || null,\n  status: 'published',\n  tags: Array.isArray(post.tags) ? post.tags : [post.tags || 'blog'],\n  meta_title: post.meta_title || post.title.substring(0, 60),\n  meta_description: post.meta_description || (post.summary || '').substring(0, 155),\n  is_featured: post.is_featured || false,\n  is_published: true,\n  published_at: new Date().toISOString(),\n  views_count: 0\n} }];"
      },
      "id": "preparar-inserir-post",
      "name": "Preparar Dados para Inserir",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        2288,
        96
      ]
    }
  ],
  "connections": {
    "Agenda (a cada 3 dias)": {
      "main": [
        [
          {
            "node": "variables",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Buscar Categorias": {
      "main": [
        [
          {
            "node": "Posts do Mês",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Posts do Mês": {
      "main": [
        [
          {
            "node": "Selecionar Categoria",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Selecionar Categoria": {
      "main": [
        [
          {
            "node": "Buscar Imagens (Pexels)",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Gerar Contexto (Gemini)": {
      "main": [
        [
          {
            "node": "Preparar Contexto",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Buscar Imagens (Pexels)": {
      "main": [
        [
          {
            "node": "Gerar Contexto (Gemini)",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Preparar Contexto": {
      "main": [
        [
          {
            "node": "AI Agent - Gerar Artigo",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "AI Agent - Gerar Artigo": {
      "main": [
        [
          {
            "node": "Formatar Post",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Formatar Post": {
      "main": [
        [
          {
            "node": "Aprovação do Post",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Roteador de Resposta": {
      "main": [
        [
          {
            "node": "Preparar Dados para Inserir",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Gerar Novo Post",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Preparar Atualização",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Inserir Post no Supabase": {
      "main": [
        [
          {
            "node": "Log Resultado",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Google Gemini Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent - Gerar Artigo",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Aprovação do Post": {
      "main": [
        [
          {
            "node": "Roteador de Resposta",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "variables": {
      "main": [
        [
          {
            "node": "Buscar Categorias",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "When clicking ‘Execute workflow’": {
      "main": [
        [
          {
            "node": "variables",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Preparar Dados para Inserir": {
      "main": [
        [
          {
            "node": "Inserir Post no Supabase",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "pinData": {},
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "fa040f7fe6cceb159a518915068fcf624c1557cd8a569ac057c06653820190fb"
  }
}