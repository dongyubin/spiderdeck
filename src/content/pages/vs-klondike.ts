import type { PageDefinition } from "../types";

export const vsKlondikePage: PageDefinition = {
  slug: "spider-solitaire-vs-klondike",
  contents: {
    en: {
      metaTitle: "Spider Solitaire vs Klondike – Key Differences",
      metaDescription:
        "Spider Solitaire and Klondike look similar but play very differently. Compare deck size, columns, foundations, building rules, and difficulty.",
      title: "Spider Solitaire vs Klondike",
      description:
        "Compare Spider Solitaire and Klondike: deck size, tableau layout, foundations, building rules, stock mechanics, and difficulty.",
      eyebrow: "Game comparison",
      breadcrumb: "Spider vs Klondike",
      playHref: "/",
      playLabel: "Play Spider Solitaire",
      lead: "Both games are called solitaire, both use a tableau of descending cards, and both ask you to organize a shuffled deck. After that, they diverge. If you learned Klondike first, Spider's two decks and eight foundations can feel like a different genre.",
      related: [
        {
          href: "/how-to-play",
          title: "How to Play Spider",
          description: "A full walkthrough if you are coming from Klondike.",
        },
        {
          href: "/spider-solitaire-rules",
          title: "Spider Rules",
          description: "The precise rules for this table.",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "Difficulty Levels",
          description: "How 1, 2, and 4 suits change the challenge.",
        },
        {
          href: "/guides",
          title: "All Guides",
          description: "Browse the full Spider Solitaire guide library.",
        },
      ],
      faq: [
        {
          q: "Is Spider Solitaire the same as Klondike?",
          a: "No. Klondike is the one-deck solitaire with seven columns and four foundations. Spider uses two decks, ten columns, and eight foundations, and it builds descending runs instead of alternating-colour sequences.",
        },
        {
          q: "Which game is harder, Spider or Klondike?",
          a: "Spider is usually harder, especially at four suits. It uses more cards, has a larger tableau, and requires eight completed sequences. Klondike has a smaller board and more forgiving cycling in many implementations.",
        },
        {
          q: "Do both games use the same winning condition?",
          a: "No. Klondike wins by building four full Ace-to-King foundations. Spider wins by clearing eight King-to-Ace same-suit sequences from the tableau.",
        },
        {
          q: "Why does Spider use two decks?",
          a: "Eight complete sequences are needed to clear the board, and one deck only contains four suits. Two decks provide the 104 cards required for eight runs while still allowing 1-, 2-, and 4-suit variants.",
        },
        {
          q: "Can I play Spider if I only know Klondike?",
          a: "Yes, but expect a different rhythm. Spider has no waste pile, the stock deals to every column at once, and groups only move when they share a suit. Read the how-to-play guide before your first hand.",
        },
      ],
      blocks: [
        { type: "h2", id: "at-a-glance", text: "At a glance" },
        {
          type: "table",
          head: ["Feature", "Spider Solitaire", "Klondike"],
          rows: [
            ["Cards", "Two decks (104 cards)", "One deck (52 cards)"],
            ["Tableau columns", "10", "7"],
            ["Foundations", "8 completed runs", "4 suit piles"],
            [
              "Build direction",
              "Descending, King to Ace",
              "Descending, King to Ace in the tableau",
            ],
            [
              "Foundation order",
              "King first, then down to Ace",
              "Ace first, then up to King",
            ],
            [
              "Suit rule for groups",
              "Same suit required",
              "Alternating colours in many versions",
            ],
            [
              "Stock",
              "Five deals, one card to each column",
              "Draw pile with a waste pile; passes may be limited",
            ],
            [
              "Empty column",
              "Accepts any card or valid run here",
              "Usually King only",
            ],
          ],
        },
        { type: "h2", id: "goal", text: "Different goals" },
        {
          type: "p",
          text: "Klondike asks you to build four foundations from Ace to King, one per suit, while using a waste pile to cycle through the deck. Spider asks you to build eight complete King-to-Ace sequences inside the tableau. When a Spider sequence is complete, it leaves the table automatically. The goal is to clear the entire board, not to build four tidy piles.",
        },
        {
          type: "h2",
          id: "building",
          text: "Different building rules",
        },
        {
          type: "p",
          text: "In Klondike, many versions let you move a group of cards in alternating colours. In Spider, a group only moves when every card in it shares a suit. That single rule is why Spider feels stricter. A beautiful alternating sequence in Klondike may be completely immobile in Spider.",
        },
        {
          type: "p",
          text: "Spider also allows any card to sit on a card one rank higher, regardless of suit. The suit restriction applies to moving groups, not to placing a single card. This is a common source of confusion for new players.",
        },
        {
          type: "h2",
          id: "stock",
          text: "Different stock mechanics",
        },
        {
          type: "p",
          text: "Klondike gives you a draw pile and a waste pile; you flip cards and may cycle through the deck depending on the rules. Spider has no waste pile. Instead, the stock deals one card to *every* column at once, and only when all ten columns are non-empty. You get five deals, and then the stock is gone.",
        },
        {
          type: "p",
          text: "That design makes Spider more spatial. You are not hunting for a single card in a draw pile; you are managing ten columns and deciding when to add ten new cards to all of them.",
        },
        { type: "h2", id: "difficulty", text: "Which is harder?" },
        {
          type: "p",
          text: "Spider is generally harder at 4 suits and comparable or slightly harder at 2 suits. The larger tableau, the same-suit group rule, and the eight-run goal create more failure points. One-suit Spider is the gentlest entry point and is easier than most Klondike variants.",
        },
        {
          type: "p",
          text: "If you are coming from Klondike, start with [1-suit Spider](/spider-solitaire-1-suit). The board is larger, but every group moves, which lets you learn the layout without the suit-reading burden. Then move to [2 suits](/spider-solitaire-2-suits).",
        },
        {
          type: "h2",
          id: "which-to-play",
          text: "Which should you play?",
        },
        {
          type: "p",
          text: "Play Klondike when you want a quick, familiar single-deck game with a smaller board. Play Spider when you want a longer, more spatial puzzle with a clearer sense of progress: each completed run leaves the table and opens space. They scratch different itches, even though both are solitaire.",
        },
      ],
    },

    zh: {
      metaTitle: "蜘蛛纸牌与克朗代克 – 关键区别",
      metaDescription:
        "蜘蛛纸牌和克朗代克看起来相似，玩法却大不相同。对比用牌数量、列数、基础区、搭建规则和难度。",
      title: "蜘蛛纸牌与克朗代克的区别",
      description:
        "对比蜘蛛纸牌与克朗代克：用牌数量、牌桌布局、基础区、搭建规则、牌堆机制和难度。",
      eyebrow: "游戏对比",
      breadcrumb: "蜘蛛 vs 克朗代克",
      playHref: "/",
      playLabel: "开始玩蜘蛛纸牌",
      lead: "两种游戏都叫接龙，都用递减排列的牌桌，都要求你把洗好的牌整理好。但除此之外，它们就分道扬镳了。如果你先学会的是克朗代克，蜘蛛纸牌的两副牌和八个基础区可能会让你觉得像另一个品类。",
      related: [
        {
          href: "/how-to-play",
          title: "蜘蛛纸牌玩法",
          description: "如果你是从克朗代克过来的，这里有一份完整教程。",
        },
        {
          href: "/spider-solitaire-rules",
          title: "蜘蛛纸牌规则",
          description: "这张牌桌的精确规则。",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "难度级别",
          description: "单花色、双花色和四花色如何改变挑战。",
        },
        {
          href: "/guides",
          title: "全部指南",
          description: "浏览完整的蜘蛛纸牌指南库。",
        },
      ],
      faq: [
        {
          q: "蜘蛛纸牌和克朗代克是同一种游戏吗？",
          a: "不是。克朗代克是单副牌、七列、四个基础区的接龙；蜘蛛纸牌使用两副牌、十列和八个基础区，搭建的是递减顺子，而不是红黑交替的序列。",
        },
        {
          q: "蜘蛛纸牌和克朗代克哪个更难？",
          a: "通常蜘蛛纸牌更难，四花色尤其如此。它用牌更多、牌桌更大，还要完成八组顺子。克朗代克的牌桌更小，在很多版本里翻牌循环也更宽容。",
        },
        {
          q: "两种游戏的获胜条件一样吗？",
          a: "不一样。克朗代克的目标是搭出四个从 A 到 K 的完整基础区；蜘蛛纸牌的目标是从牌桌清掉八组同花色 K 到 A 的顺子。",
        },
        {
          q: "为什么蜘蛛纸牌要用两副牌？",
          a: "清空牌桌需要八组完整顺子，而一副牌只有四种花色。两副牌提供完成八组顺子所需的 104 张牌，同时还能支持单花色、双花色和四花色变体。",
        },
        {
          q: "只玩过克朗代克能直接玩蜘蛛纸牌吗？",
          a: "可以，但要适应不同的节奏。蜘蛛纸牌没有废牌堆，牌堆会一次给每列发牌，牌组只有同花色时才能整体移动。第一局之前先读一遍玩法教程吧。",
        },
      ],
      blocks: [
        { type: "h2", id: "at-a-glance", text: "快速对比" },
        {
          type: "table",
          head: ["项目", "蜘蛛纸牌", "克朗代克"],
          rows: [
            ["用牌", "两副牌（104 张）", "一副牌（52 张）"],
            ["牌桌列数", "10", "7"],
            ["基础区", "8 组完成的顺子", "4 个花色堆"],
            ["搭建方向", "递减，从 K 到 A", "牌桌上递减，从 K 到 A"],
            ["基础区顺序", "先 K，再递减到 A", "先 A，再递增到 K"],
            ["牌组花色规则", "必须同花色", "许多版本允许红黑交替"],
            [
              "牌堆",
              "五次发牌，每列一张",
              "翻牌堆加废牌堆；可通过次数可能有限",
            ],
            ["空列", "可放任何牌或合法顺子", "通常只能放 K"],
          ],
        },
        { type: "h2", id: "goal", text: "目标不同" },
        {
          type: "p",
          text: "克朗代克要求你搭出四个从 A 到 K 的基础区，每种花色一个，并借助废牌堆循环翻牌。蜘蛛纸牌要求你在牌桌内搭出八组完整的 K 到 A 顺子。顺子一旦完成就会自动离开牌桌。目标是清空整个牌桌，而不是摆出四个整齐的牌堆。",
        },
        {
          type: "h2",
          id: "building",
          text: "搭建规则不同",
        },
        {
          type: "p",
          text: "在克朗代克中，许多版本允许你移动红黑交替的牌组。而在蜘蛛纸牌里，只有组内每张牌都同花色时才能整体移动。正是这一条规则让蜘蛛纸牌显得更严格：克朗代克里漂亮的红黑交替序列，在蜘蛛纸牌中可能完全动不了。",
        },
        {
          type: "p",
          text: "蜘蛛纸牌也允许任何牌压在大一位的牌上，不分花色。花色限制针对的是牌组移动，而不是单张落牌。这是新手常见的困惑来源。",
        },
        {
          type: "h2",
          id: "stock",
          text: "牌堆机制不同",
        },
        {
          type: "p",
          text: "克朗代克有翻牌堆和废牌堆，你翻牌，并按规则决定能循环几次。蜘蛛纸牌没有废牌堆，牌堆会一次给*每一列*各发一张牌，而且只有在十列都非空时才允许发牌。一局只有五次，用完就没了。",
        },
        {
          type: "p",
          text: "这种设计让蜘蛛纸牌更强调空间感。你不是在翻牌堆里找某一张牌，而是在管理十列牌，并决定何时给所有列一起加上十张新牌。",
        },
        { type: "h2", id: "difficulty", text: "哪个更难？" },
        {
          type: "p",
          text: "四花色时蜘蛛纸牌通常更难，双花色时两者相当，或蜘蛛纸牌略难。更大的牌桌、同花色牌组规则和八组顺子的目标，制造了更多失败点。单花色蜘蛛纸牌是最温和的入门选择，比大多数克朗代克变体都容易。",
        },
        {
          type: "p",
          text: "如果你是从克朗代克过来的，先玩[单花色蜘蛛纸牌](/spider-solitaire-1-suit)。牌桌更大，但任何牌组都能移动，你可以在没有花色识别负担的情况下熟悉布局。之后再换到[双花色](/spider-solitaire-2-suits)。",
        },
        {
          type: "h2",
          id: "which-to-play",
          text: "该玩哪一个？",
        },
        {
          type: "p",
          text: "想要一局熟悉、快速、牌桌更小的单副牌游戏，就玩克朗代克；想要一场更漫长、更讲空间、进度感也更清晰的解谜，就玩蜘蛛纸牌：每完成一组顺子，牌就会离开牌桌并腾出空间。它们满足的是不同的需求，尽管都叫接龙。",
        },
      ],
    },

    ja: {
      metaTitle: "スパイダーソリティアとクロンダイク – 主な違い",
      metaDescription:
        "スパイダーソリティアとクロンダイクは似て見えて遊び方は大きく違います。デッキ枚数、列、ファウンデーション、積み方のルール、難易度を比較します。",
      title: "スパイダーソリティアとクロンダイクの違い",
      description:
        "スパイダーソリティアとクロンダイクを比較。デッキ枚数、場の配置、ファウンデーション、積み方のルール、山札の仕組み、難易度を解説します。",
      eyebrow: "ゲーム比較",
      breadcrumb: "スパイダー vs クロンダイク",
      playHref: "/",
      playLabel: "スパイダーソリティアをプレイ",
      lead: "どちらもソリティアと呼ばれ、どちらも降順のカードを並べる場を使い、シャッフルされたデッキを整理するゲームです。しかしそこから先は別物です。クロンダイクを先に覚えた人には、スパイダーソリティアの2デッキと8つのファウンデーションは別ジャンルに感じられるかもしれません。",
      related: [
        {
          href: "/how-to-play",
          title: "スパイダーの遊び方",
          description: "クロンダイクから来た人向けの完全ガイド。",
        },
        {
          href: "/spider-solitaire-rules",
          title: "スパイダーのルール",
          description: "このテーブルの正確なルール。",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "難易度レベル",
          description: "1・2・4スートで挑戦がどう変わるか。",
        },
        {
          href: "/guides",
          title: "すべてのガイド",
          description: "スパイダーソリティアのガイド一覧を見る。",
        },
      ],
      faq: [
        {
          q: "スパイダーソリティアとクロンダイクは同じゲームですか？",
          a: "いいえ。クロンダイクは1デッキ、7列、4つのファウンデーションを使うソリティアです。スパイダーソリティアは2デッキ、10列、8つのファウンデーションを使い、色を交互にした並びではなく降順のランを作ります。",
        },
        {
          q: "スパイダーとクロンダイクではどちらが難しいですか？",
          a: "通常はスパイダーのほうが難しく、特に4スートで顕著です。カードが多く、場が広く、8本のラン完成が必要です。クロンダイクは盤面が小さく、多くの実装では山札をめくる回りにも余裕があります。",
        },
        {
          q: "勝利条件は同じですか？",
          a: "いいえ。クロンダイクはAからKまでのファウンデーションを4つ完成させると勝利です。スパイダーは場から同スートのKからAのランを8本片付けると勝利です。",
        },
        {
          q: "なぜスパイダーは2デッキを使うのですか？",
          a: "場を片付けるには8本の完全なランが必要ですが、1デッキには4スートしかありません。2デッキなら8本分の104枚を確保でき、さらに1・2・4スートの変種も作れます。",
        },
        {
          q: "クロンダイクしか知らなくてもスパイダーを遊べますか？",
          a: "はい。ただしリズムは違います。スパイダーにはウェイストの山がなく、山札はすべての列に一度に配られ、グループは同スートのときだけ動かせます。最初の1局の前に遊び方ガイドを読んでください。",
        },
      ],
      blocks: [
        { type: "h2", id: "at-a-glance", text: "ひと目で比較" },
        {
          type: "table",
          head: ["項目", "スパイダーソリティア", "クロンダイク"],
          rows: [
            ["カード", "2デッキ（104枚）", "1デッキ（52枚）"],
            ["場の列数", "10", "7"],
            ["ファウンデーション", "完成した8本のラン", "4つのスートの山"],
            ["積む方向", "降順、KからAへ", "場では降順、KからAへ"],
            [
              "ファウンデーションの順序",
              "Kが先、そこからAへ下る",
              "Aが先、そこからKへ上がる",
            ],
            ["グループのスート規則", "同スートが必要", "多くのバージョンで色の交互可"],
            [
              "山札",
              "5回の配布、各列に1枚",
              "山札とウェイストの山。回せる回数に制限がある場合も",
            ],
            ["空列", "どのカードも合法なランも置ける", "通常はKのみ"],
          ],
        },
        { type: "h2", id: "goal", text: "目的が違う" },
        {
          type: "p",
          text: "クロンダイクはAからKへ、スートごとに4つのファウンデーションを作り、ウェイストの山を使ってデッキを回します。スパイダーは場の中でKからAまでの完全なランを8本作ります。完成したランは自動的に場から離れます。目指すのは盤面全体を片付けることで、きれいな山を4つ作ることではありません。",
        },
        {
          type: "h2",
          id: "building",
          text: "積み方のルールが違う",
        },
        {
          type: "p",
          text: "クロンダイクでは、多くのバージョンで色を交互にしたグループを動かせます。スパイダーでは、グループ内のすべてのカードが同スートのときだけまとめて動かせます。この1つのルールがスパイダーを厳しく感じさせる理由です。クロンダイクで美しい交互の並びも、スパイダーではまったく動かないことがあります。",
        },
        {
          type: "p",
          text: "スパイダーでは、スートに関係なく1つ上のランクのカードの上に置くこともできます。スートの制限はグループの移動にかかるもので、1枚を置くときにはかかりません。初心者がよく混乱する点です。",
        },
        {
          type: "h2",
          id: "stock",
          text: "山札の仕組みが違う",
        },
        {
          type: "p",
          text: "クロンダイクには山札とウェイストの山があり、カードをめくり、ルールに応じてデッキを何度か回せます。スパイダーにウェイストの山はありません。代わりに山札が*すべての*列に一度に1枚ずつ配られ、それは10列すべてが空でないときだけです。配布は5回で、それで山札は終わりです。",
        },
        {
          type: "p",
          text: "この設計がスパイダーをより空間的にしています。山札の中の1枚を探すのではなく、10列を管理し、いつ10枚の新しいカードをすべての列に加えるかを決めるのです。",
        },
        { type: "h2", id: "difficulty", text: "どちらが難しい？" },
        {
          type: "p",
          text: "スパイダーは4スートで一般的に難しく、2スートでは同程度かやや難しいくらいです。広い場、同スートのグループ規則、8本のランという目標が、失敗するポイントを増やします。1スートのスパイダーは最もやさしい入り口で、ほとんどのクロンダイク変種より簡単です。",
        },
        {
          type: "p",
          text: "クロンダイクから来たなら、[1スートのスパイダー](/spider-solitaire-1-suit)から始めましょう。盤面は広くなりますが、どのグループも動かせるので、スートを読む負担なしに配置を覚えられます。そのあと[2スート](/spider-solitaire-2-suits)へ進んでください。",
        },
        {
          type: "h2",
          id: "which-to-play",
          text: "どちらを遊ぶべき？",
        },
        {
          type: "p",
          text: "手軽で慣れた1デッキのゲーム、小さめの盤面を求めるならクロンダイク。より長く、空間を読むパズルと、はっきりした進行感を求めるならスパイダーです。ランが完成するたびにカードが場を離れ、スペースが生まれます。どちらもソリティアですが、満たす欲求は違います。",
        },
      ],
    },
  },
};
