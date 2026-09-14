# Treino+ — Preview

Prévia web de uma plataforma de personal trainer com conteúdo assíncrono (protocolos, vídeos, corrida, adaptações, ebook e loja). Interface em português (PT-BR), visual de app de conteúdo fitness (estilo Apple Fitness+ / Nike Training Club) — a página *é* a UI mobile, sem moldura de celular.

## Abrir

**Opção 1 — arquivo local**

```
file:///workspace/trainer-preview/index.html
```

**Opção 2 — servidor estático**

```bash
python3 -m http.server 8765 --directory /workspace/trainer-preview
```

Depois acesse: [http://127.0.0.1:8765/](http://127.0.0.1:8765/)

Sem build step. `index.html` + `assets/body-silhouettes.js` (SVG anatômicos) + `assets/illustrations.js` (rotas, timer, adaptações, loja).

Em telas largas o app fica centrado (~430px) sobre fundo branco.

## Navegação

Barra inferior: **Início · Treinos · Corrida · Loja · Perfil**. Telas internas usam hash (`#fast`, `#corpo-peito`, `#corrida-5k`, etc.).

## Módulos (content cards)

- **Início** — hero com silhueta, Continuar (media cards), Métodos (tiles), grupos musculares, Explorar com ilustrações SVG
- **Treinos** — Fast banner, protocolos com capa + collage, grid de corpo (Peito…Core)
- **Protocolos** — capas com badge de nível; sessões da semana como cards com highlight Peito/Costas/Pernas
- **Fast Trainer** — card de início com timer + tiles de exercício com play e mini-silhueta
- **Corrida** — capas 5/10 km com rota SVG, week chips e day cards
- **Adaptações** — grid 2×2 com SVGs por condição; detalhe com hero + cards de programa
- **Ebook** — capa livro + capítulos em tiles
- **Loja** — grid denser com packaging art por produto
- **Perfil** — avatar + membership card + atalhos curtos

## Nota

Preview de produto (UI/UX), não app em produção. Ações como “Iniciar” e “Baixar” mostram avisos de demonstração.
