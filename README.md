# Bella Massa Brasil - Landing Page

## Descrição
Landing page completa e profissional para a microempresa "Bella Massa Brasil", especializada em massas congeladas artesanais. O design combina a tradição italiana com o carinho brasileiro, criando uma identidade visual única e atrativa.

## Características Implementadas

### ✅ Design e Identidade Visual
- **Nome da Marca**: "Bella Massa Brasil" - fusão perfeita entre Itália e Brasil
- **Paleta de Cores**: Inspirada nas bandeiras italiana e brasileira
  - Verde Principal: #2E7D32
  - Verde Claro: #66BB6A  
  - Vermelho Italiano: #C62828
  - Branco: #FFFFFF
  - Creme: #FFF8E1
- **Tipografia**: Playfair Display (elegante) + Inter (moderna)
- **Elementos Visuais**: Bandeiras da Itália e Brasil integradas ao design

### ✅ Estrutura Completa da Landing Page

#### 1. **Header Profissional**
- Logo "Bella Massa Brasil" com tagline
- Menu de navegação: Início, Categorias, Produtos, Sobre, Contato
- Links para redes sociais (Instagram, Facebook)
- Botão WhatsApp destacado
- Menu hamburger responsivo para mobile

#### 2. **Seção Hero Impactante**
- Imagem de fundo com massas italianas
- Overlay com gradiente das cores da marca
- Título principal chamativo
- Badge com bandeiras da Itália e Brasil
- Botões de call-to-action
- Cards de características (Congeladas, Artesanais, Práticas)

#### 3. **Categorias de Produtos**
- 4 categorias principais com ícones:
  - Lasanhas (bandeira italiana)
  - Massas Frescas (bandeira italiana)
  - Molhos (bandeira italiana)
  - Pratos Prontos (bandeira brasileira)
- Cards interativos com hover effects

#### 4. **Produtos em Destaque** ⭐
- 6 produtos com cards profissionais:
  - Lasanha à Bolonhesa (R$ 32,90)
  - Macarrão Mac & Cheese (R$ 18,90)
  - Penne com Brócolis e Bacon (R$ 24,90)
  - Lasanha 4 Queijos (R$ 35,90)
  - Fettuccine Alfredo (R$ 22,90)
  - Ravioli de Ricota e Espinafre (R$ 28,90)
- Cada produto tem botão "Pedir pelo WhatsApp"
- Badges de destaque (Mais Vendida, Novidade)

#### 5. **Carrossel de Imagens** ⭐
- 3 slides com transição automática:
  - Ingredientes Selecionados
  - Processo Artesanal
  - Sabor Autêntico
- Controles de navegação (anterior/próximo)
- Indicadores de slide
- Auto-play a cada 5 segundos

#### 6. **Sobre a Bella Massa Brasil**
- História da marca
- 4 características principais:
  - Receitas Tradicionais (bandeira italiana)
  - Ingredientes Frescos
  - Tecnologia de Congelamento
  - Feito no Brasil (bandeira brasileira)
- Imagem com badge de qualidade

#### 7. **Contato e Redes Sociais** ⭐
- 3 cards informativos:
  - WhatsApp com botão direto
  - Horário de Atendimento
  - Informações de Entrega
- Seção de redes sociais com botões estilizados
- Links para Instagram, Facebook e WhatsApp

#### 8. **Footer Completo**
- Informações da empresa
- Links organizados por categorias
- Contato e redes sociais
- Bandeiras da Itália e Brasil

### ✅ Funcionalidades Interativas

#### WhatsApp Integration ⭐
- **Template de mensagem personalizada** para massas:
```
🍝 Olá, Bella Massa Brasil!

Gostaria de conhecer mais sobre suas massas artesanais congeladas.

Tenho interesse em:
• Lasanhas tradicionais
• Massas frescas
• Molhos artesanais
• Pratos prontos

Poderiam me informar sobre:
📋 Cardápio completo e preços
🚚 Condições de entrega
💳 Formas de pagamento
⏰ Tempo de preparo

Aguardo retorno! 🇮🇹🇧🇷
```

- **Template específico por produto** com nome e preço
- Múltiplos botões WhatsApp estrategicamente posicionados

#### Redes Sociais ⭐
- Links para Instagram (@bellamassabrasil)
- Links para Facebook (Bella Massa Brasil)
- Integração completa com WhatsApp
- Botões estilizados com cores das redes

#### Carrossel Interativo ⭐
- Navegação manual (botões anterior/próximo)
- Indicadores clicáveis
- Auto-play com pausa no hover
- Transições suaves

#### Outras Funcionalidades
- **Menu mobile responsivo** com hamburger
- **Scroll suave** entre seções
- **Animações de entrada** dos elementos
- **Efeito parallax** na seção hero
- **Header transparente** com scroll
- **Lazy loading** das imagens
- **Feedback visual** nos botões
- **Notificações toast** para ações

### ✅ Responsividade Completa
- **Desktop**: Layout em grid otimizado
- **Tablet**: Adaptação dos grids e espaçamentos
- **Mobile**: Layout em coluna única
- **Breakpoints**: 768px e 480px
- **Menu mobile**: Hamburger funcional
- **Imagens responsivas**: Adaptação automática

## Estrutura de Arquivos
```
bella-massa-brasil/
├── index.html          # Página principal
├── style.css           # Estilos CSS completos
├── script.js           # Funcionalidades JavaScript
├── README.md           # Este arquivo
├── images/             # Imagens do projeto
│   ├── lasanha-bolonhesa.jpg
│   ├── lasanha-sadia.jpg
│   ├── macarrao-mac-cheese.jpg
│   ├── macarrao-brocolis-bacon.jpg
│   ├── prato-massa-italiana.jpg
│   ├── massas-italiana.jpg
│   ├── ingredientes-italianos.png
│   └── ingredientes-frescos.jpg
└── assets/             # Recursos adicionais
```

## Como Personalizar

### 1. WhatsApp
Edite o arquivo `script.js` nas funções `openWhatsApp()` e `openWhatsAppProduct()`:
```javascript
const phoneNumber = '5511999998888'; // Substitua pelo seu número
```

### 2. Redes Sociais
Edite o arquivo `script.js` na função `openSocialMedia()`:
```javascript
const urls = {
    instagram: 'https://instagram.com/seuperfil',
    facebook: 'https://facebook.com/suapagina'
};
```

### 3. Informações da Empresa
- **Nome**: Altere "Bella Massa Brasil" no `index.html`
- **Produtos**: Atualize nomes, preços e descrições
- **Contato**: Seção de contato no `index.html`
- **Horários**: Informações de funcionamento

### 4. Cores (se necessário)
Edite o arquivo `style.css` nas variáveis CSS:
```css
:root {
    --verde-principal: #2E7D32;
    --verde-claro: #66BB6A;
    --vermelho-italiano: #C62828;
    --branco: #FFFFFF;
    --creme: #FFF8E1;
}
```

### 5. Produtos
- Substitua as imagens na pasta `images/`
- Atualize nomes, preços e descrições no `index.html`
- Adicione ou remova produtos conforme necessário

## Implementação no WordPress

### Opção 1: Página Estática
1. Crie uma nova página no WordPress
2. Use um plugin como "Insert Headers and Footers"
3. Cole o conteúdo do `<body>` no editor
4. Adicione o CSS no Customizer

### Opção 2: Tema Personalizado
1. Crie um tema filho
2. Substitua o `index.php` com o HTML
3. Adicione o CSS no `style.css` do tema
4. Adicione o JS no `functions.php`

### Opção 3: Page Builder
1. Use Elementor, Divi ou similar
2. Importe o HTML como template
3. Ajuste os estilos visualmente
4. Configure as funcionalidades

## Tecnologias Utilizadas
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos avançados e animações
- **JavaScript ES6** - Funcionalidades interativas
- **Font Awesome** - Ícones profissionais
- **Google Fonts** - Tipografia (Playfair Display + Inter)
- **Bandeiras via CDN** - Flagcdn.com

## Compatibilidade
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Dispositivos móveis (iOS/Android)
- ✅ Tablets e desktops
- ✅ Acessibilidade básica

## Performance
- Imagens otimizadas
- CSS e JS organizados
- Lazy loading implementado
- Animações com GPU
- Carregamento progressivo

## Diferenciais da Landing Page

### 🇮🇹🇧🇷 Identidade Única
- Fusão perfeita entre tradição italiana e carinho brasileiro
- Uso estratégico das bandeiras nos elementos visuais
- Paleta de cores harmoniosa e significativa

### 📱 Experiência Mobile-First
- Design responsivo completo
- Menu mobile intuitivo
- Botões otimizados para touch

### 💬 Integração WhatsApp Avançada
- Templates de mensagem específicos
- Múltiplos pontos de contato
- Mensagens pré-formatadas profissionais

### 🎨 Design Profissional
- Animações suaves e modernas
- Efeitos hover elaborados
- Carrossel interativo
- Layout equilibrado e atrativo

### 🚀 Performance Otimizada
- Carregamento rápido
- Animações fluidas
- Código limpo e organizado

## Suporte
Para dúvidas sobre personalização ou implementação:
1. Consulte os comentários no código
2. Verifique o console do navegador para logs
3. Teste as funcionalidades passo a passo

---

**🍝 Bella Massa Brasil - Tradição Italiana, Sabor Brasileiro! 🇮🇹🇧🇷**

*Protótipo completo e pronto para implementação!*

# bella-massas-cardapio
