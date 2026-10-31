import type { PageDefinition } from "../types";

export const guidesPage: PageDefinition = {
  slug: "guides",
  contents: {
    en: {
      metaTitle: "Spider Solitaire Guides – Rules, Strategy & Tips",
      metaDescription:
        "Every Spider Solitaire guide in one place: rules, how to play, 1 vs 2 vs 4 suits, strategy, mobile controls, and answers to common questions.",
      title: "Spider Solitaire Guides",
      description:
        "All Spider Solitaire guides: rules, strategy, difficulty comparisons, mobile play, no-download options, and FAQs.",
      eyebrow: "Guide library",
      breadcrumb: "Guides",
      playHref: "/",
      playLabel: "Play Spider Solitaire",
      lead: "New to the game, stuck on a deal, or comparing difficulty modes? Start with the walkthrough, then use the reference and strategy pages when a specific question comes up. Every guide is written for this browser table, so the rules match what you see on screen.",
      related: [
        {
          href: "/spider-solitaire-2-suits",
          title: "2-Suit Table",
          description: "The default mode, with its own rules and strategy notes.",
        },
        {
          href: "/spider-solitaire-1-suit",
          title: "1-Suit Table",
          description: "The beginner table for learning how Spider moves work.",
        },
        {
          href: "/spider-solitaire-4-suits",
          title: "4-Suit Table",
          description: "The classic expert version with all four suits.",
        },
        {
          href: "/about",
          title: "About SpiderDeck",
          description: "What this site is and how the game is built.",
        },
      ],
      blocks: [
        { type: "h2", id: "start-here", text: "Start with the basics" },
        {
          type: "p",
          text: "Spider Solitaire looks like other solitaire games but plays differently: ten columns, two decks, and a goal of eight complete King-to-Ace runs. If you have never played, read [How to Play Spider Solitaire](/how-to-play) first. It covers the initial deal, how groups move, when the stock is legal, and what happens when a run completes.",
        },
        {
          type: "p",
          text: "If you already know the game and need a precise answer, the [rules reference](/spider-solitaire-rules) is the page to bookmark. It spells out the fiddly parts: single cards versus groups, empty columns, blocked deals, and automatic foundation moves.",
        },
        { type: "h2", id: "all-guides", text: "All guides" },
        {
          type: "cards",
          items: [
            {
              href: "/how-to-play",
              title: "How to Play Spider Solitaire",
              description:
                "A complete first-game walkthrough: setup, legal moves, dealing, and the controls on desktop and touch screens.",
              tag: "Start here",
            },
            {
              href: "/spider-solitaire-rules",
              title: "Spider Solitaire Rules",
              description:
                "The reference version: objective, deck, tableau, empty columns, stock deals, completed runs, and edge cases.",
              tag: "Reference",
            },
            {
              href: "/spider-solitaire-strategy",
              title: "Spider Solitaire Strategy",
              description:
                "Ten practical habits that improve your win rate, from exposing face-down cards to protecting empty columns.",
              tag: "Improve",
            },
            {
              href: "/spider-solitaire-difficulty-levels",
              title: "1 Suit vs 2 Suits vs 4 Suits",
              description:
                "How the deck changes at each difficulty, which mode to start with, and when to move up.",
              tag: "Compare",
            },
            {
              href: "/spider-solitaire-vs-klondike",
              title: "Spider Solitaire vs Klondike",
              description:
                "Two decks, ten columns, eight runs: how Spider differs from the solitaire most people learned first.",
              tag: "Compare",
            },
            {
              href: "/spider-solitaire-mobile",
              title: "Spider Solitaire on Mobile",
              description:
                "Tap-to-move, dragging, small screens, orientation, and settings that make phone play comfortable.",
              tag: "Play",
            },
            {
              href: "/spider-solitaire-no-download",
              title: "Spider Solitaire No Download",
              description:
                "What browser play means for setup, progress, accounts, and updates — and what it does not mean.",
              tag: "Play",
            },
            {
              href: "/spider-solitaire-unblocked",
              title: "Spider Solitaire Unblocked",
              description:
                "How browser-based games avoid installs, availability caveats, and sensible troubleshooting steps.",
              tag: "Play",
            },
            {
              href: "/spider-solitaire-faq",
              title: "Spider Solitaire FAQ",
              description:
                "Straight answers about rules, difficulty, undo, hints, saved games, scoring, and offline play.",
              tag: "Answers",
            },
          ],
        },
        { type: "h2", id: "learning-path", text: "A sensible learning path" },
        {
          type: "ol",
          items: [
            "**Learn the mechanics on 1 suit.** All 104 cards are spades, so every descending run moves as a group. Focus on flipping face-down cards and opening columns.",
            "**Play 2 suits until it feels normal.** Mixed stacks force you to read suits before moving a group. This is the mode most players keep as their everyday table.",
            "**Read the strategy guide.** The tips are not difficulty specific; they apply to 1, 2, and 4 suits.",
            "**Try 4 suits without expectations.** The expert table is less forgiving, and some random deals are simply not winnable. Treat each game as practice in suit separation.",
          ],
        },
        { type: "h2", id: "site-help", text: "Help with the site itself" },
        {
          type: "p",
          text: "For phone controls, read the [mobile guide](/spider-solitaire-mobile). For browser requirements and saved progress, see [no download](/spider-solitaire-no-download). If a network blocks game sites, the [unblocked page](/spider-solitaire-unblocked) explains what you can and cannot control.",
        },
      ],
    },

    zh: {
      metaTitle: "蜘蛛纸牌指南 – 规则、策略与技巧",
      metaDescription:
        "蜘蛛纸牌全部指南集中在一处：规则、玩法、单花色与双花色、四花色对比、策略、手机操作以及常见问题解答。",
      title: "蜘蛛纸牌指南",
      description:
        "蜘蛛纸牌全部指南：规则、策略、难度对比、手机游玩、免下载方案与常见问题。",
      eyebrow: "指南中心",
      breadcrumb: "指南",
      playHref: "/",
      playLabel: "玩蜘蛛纸牌",
      lead: "刚接触游戏、卡在某一局，还是想比较不同难度？先看入门玩法，遇到具体问题时再查阅规则和策略页面。每篇指南都针对这张浏览器牌桌撰写，因此规则与你屏幕上的表现完全一致。",
      related: [
        {
          href: "/spider-solitaire-2-suits",
          title: "双花色牌桌",
          description: "默认模式，附有专属规则与策略要点。",
        },
        {
          href: "/spider-solitaire-1-suit",
          title: "单花色牌桌",
          description: "适合新手，学习蜘蛛纸牌的各种移动方式。",
        },
        {
          href: "/spider-solitaire-4-suits",
          title: "四花色牌桌",
          description: "包含全部四种花色的经典高手版本。",
        },
        {
          href: "/about",
          title: "关于 SpiderDeck",
          description: "这个网站是什么，游戏又是如何构建的。",
        },
      ],
      blocks: [
        { type: "h2", id: "start-here", text: "从基础开始" },
        {
          type: "p",
          text: "蜘蛛纸牌看起来和其他纸牌游戏相似，玩法却大不相同：十列牌、两副牌，目标是把八组从 K 到 A 的顺子全部收走。如果你从未玩过，请先读[蜘蛛纸牌玩法](/how-to-play)。它讲解了初始发牌、牌组如何移动、何时可以发牌，以及一组顺子完成时会发生什么。",
        },
        {
          type: "p",
          text: "如果你已经会玩，只需要一个准确答案，那么[规则速查](/spider-solitaire-rules)值得收藏。它把那些细碎的规则讲清楚：单张牌与牌组的区别、空列、无法发牌的情况，以及自动移入基础区的操作。",
        },
        { type: "h2", id: "all-guides", text: "全部指南" },
        {
          type: "cards",
          items: [
            {
              href: "/how-to-play",
              title: "蜘蛛纸牌玩法",
              description:
                "完整的第一局流程：开局、合法移动、发牌，以及桌面和触屏上的操作方式。",
              tag: "从这里开始",
            },
            {
              href: "/spider-solitaire-rules",
              title: "蜘蛛纸牌规则",
              description:
                "速查版本：目标、牌组、牌桌、空列、牌堆发牌、完成的顺子以及边界情况。",
              tag: "速查",
            },
            {
              href: "/spider-solitaire-strategy",
              title: "蜘蛛纸牌策略",
              description:
                "十个实用习惯，从翻开背面朝上的牌到保护空列，帮你提高胜率。",
              tag: "进阶",
            },
            {
              href: "/spider-solitaire-difficulty-levels",
              title: "单花色、双花色与四花色对比",
              description:
                "每个难度下牌组如何变化、该从哪个模式开始，以及何时升级。",
              tag: "对比",
            },
            {
              href: "/spider-solitaire-vs-klondike",
              title: "蜘蛛纸牌与克朗代克纸牌",
              description:
                "两副牌、十列、八组顺子：蜘蛛纸牌与大多数人最早学会的纸牌游戏有何不同。",
              tag: "对比",
            },
            {
              href: "/spider-solitaire-mobile",
              title: "手机上的蜘蛛纸牌",
              description:
                "点按移动、拖动、小屏幕、屏幕方向，以及让手机游玩更舒适的设置。",
              tag: "游玩",
            },
            {
              href: "/spider-solitaire-no-download",
              title: "蜘蛛纸牌免下载",
              description:
                "浏览器游玩对安装、进度、账号和更新意味着什么——以及不意味着什么。",
              tag: "游玩",
            },
            {
              href: "/spider-solitaire-unblocked",
              title: "蜘蛛纸牌解除访问限制",
              description:
                "浏览器游戏如何避开安装、可用性方面的注意事项，以及合理的排查步骤。",
              tag: "游玩",
            },
            {
              href: "/spider-solitaire-faq",
              title: "蜘蛛纸牌常见问题",
              description:
                "关于规则、难度、撤销、提示、存档、计分和离线游玩的直接解答。",
              tag: "问答",
            },
          ],
        },
        { type: "h2", id: "learning-path", text: "合理的学习路线" },
        {
          type: "ol",
          items: [
            "**先用单花色熟悉机制。** 104 张牌全是黑桃，因此任何递减的连续牌组都能整体移动。专注于翻开背面朝上的牌、打开新列。",
            "**用双花色玩到习以为常。** 混合牌堆会迫使你在移动牌组前先看清花色。多数玩家会把这一模式当作日常牌桌。",
            "**读一读策略指南。** 这些技巧并非针对某一难度，单花色、双花色和四花色都适用。",
            "**不带期待地尝试四花色。** 专家牌桌容错更低，有些随机牌局本来就无法获胜。把每一局都当作分离花色的练习。",
          ],
        },
        { type: "h2", id: "site-help", text: "网站本身的帮助" },
        {
          type: "p",
          text: "手机操作请读[手机版指南](/spider-solitaire-mobile)。浏览器要求和存档进度见[免下载说明](/spider-solitaire-no-download)。如果网络屏蔽了游戏网站，[解除访问限制页面](/spider-solitaire-unblocked)会说明哪些事你能控制、哪些不能。",
        },
      ],
    },

    ja: {
      metaTitle: "スパイダーソリティア ガイド – ルール・攻略・コツ",
      metaDescription:
        "スパイダーソリティアのガイドを一か所に集約。ルール、遊び方、1・2・4スートの比較、攻略、モバイル操作、よくある質問の回答まで。",
      title: "スパイダーソリティア ガイド",
      description:
        "スパイダーソリティアの全ガイド：ルール、攻略、難易度の比較、モバイルでのプレイ、ダウンロード不要の選択肢、よくある質問。",
      eyebrow: "ガイドライブラリ",
      breadcrumb: "ガイド",
      playHref: "/",
      playLabel: "スパイダーソリティアで遊ぶ",
      lead: "初めての方も、配布で行き詰まった方も、難易度を比べたい方も。まずは遊び方の解説から始め、具体的な疑問が出たらリファレンスと攻略ページを参照してください。どのガイドもこのブラウザ版テーブルに合わせて書かれているので、ルールは画面の表示と一致します。",
      related: [
        {
          href: "/spider-solitaire-2-suits",
          title: "2スートのテーブル",
          description: "デフォルトモード。専用のルールと攻略メモ付き。",
        },
        {
          href: "/spider-solitaire-1-suit",
          title: "1スートのテーブル",
          description: "スパイダーの動かし方を学ぶ初心者向けテーブル。",
        },
        {
          href: "/spider-solitaire-4-suits",
          title: "4スートのテーブル",
          description: "4スートすべてを使うクラシックな上級者版。",
        },
        {
          href: "/about",
          title: "SpiderDeck について",
          description: "このサイトの内容とゲームの作られ方。",
        },
      ],
      blocks: [
        { type: "h2", id: "start-here", text: "基礎から始める" },
        {
          type: "p",
          text: "スパイダーソリティアは他のソリティアと見た目は似ていますが、遊び方は大きく異なります。10列、2デッキ、そしてKからAまでのランを8組完成させるのが目標です。未経験の方はまず[スパイダーソリティアの遊び方](/how-to-play)をお読みください。最初の配布、グループの動かし方、山札を配れる条件、ランの完成時に何が起きるかを解説しています。",
        },
        {
          type: "p",
          text: "すでにルールを知っていて正確な答えが欲しいときは、[ルール早見表](/spider-solitaire-rules)をブックマークしておきましょう。単札とグループの違い、空列、配れない状況、ファウンデーションへの自動移動といった細かい部分まで明記しています。",
        },
        { type: "h2", id: "all-guides", text: "すべてのガイド" },
        {
          type: "cards",
          items: [
            {
              href: "/how-to-play",
              title: "スパイダーソリティアの遊び方",
              description:
                "初めての1ゲームを完全解説。準備、合法手、配布、PCとタッチ画面の操作方法まで。",
              tag: "まずはここから",
            },
            {
              href: "/spider-solitaire-rules",
              title: "スパイダーソリティアのルール",
              description:
                "リファレンス版：目的、デッキ、場、空列、山札からの配布、完成したラン、例外ケース。",
              tag: "リファレンス",
            },
            {
              href: "/spider-solitaire-strategy",
              title: "スパイダーソリティア攻略",
              description:
                "裏向きのカードを表にする、空列を守るなど、勝率を上げる10の実践的な習慣。",
              tag: "上達",
            },
            {
              href: "/spider-solitaire-difficulty-levels",
              title: "1スート・2スート・4スートの比較",
              description:
                "難易度ごとにデッキがどう変わるか、最初に選ぶモード、ステップアップの時期。",
              tag: "比較",
            },
            {
              href: "/spider-solitaire-vs-klondike",
              title: "スパイダーソリティアとクロンダイク",
              description:
                "2デッキ、10列、8つのラン。多くの人が最初に覚えるソリティアとの違い。",
              tag: "比較",
            },
            {
              href: "/spider-solitaire-mobile",
              title: "モバイルで遊ぶスパイダーソリティア",
              description:
                "タップ移動、ドラッグ、小さい画面、画面の向き、スマホを快適にする設定。",
              tag: "プレイ",
            },
            {
              href: "/spider-solitaire-no-download",
              title: "ダウンロード不要のスパイダーソリティア",
              description:
                "ブラウザで遊ぶことが、準備・進行状況・アカウント・更新にとって何を意味するか。",
              tag: "プレイ",
            },
            {
              href: "/spider-solitaire-unblocked",
              title: "アクセス制限時のスパイダーソリティア",
              description:
                "ブラウザゲームがインストールを避けられる理由、利用可否の注意点、実際的なトラブル対処。",
              tag: "プレイ",
            },
            {
              href: "/spider-solitaire-faq",
              title: "スパイダーソリティア FAQ",
              description:
                "ルール、難易度、元に戻す、ヒント、保存、スコア、オフラインプレイについての明快な回答。",
              tag: "回答",
            },
          ],
        },
        { type: "h2", id: "learning-path", text: "無理のない学習ステップ" },
        {
          type: "ol",
          items: [
            "**1スートで仕組みを覚える。** 104枚すべてがスペードなので、降順のランはまとめて動かせます。裏向きのカードをめくること、列を空けることに集中しましょう。",
            "**2スートを自然に感じるまで遊ぶ。** 混ざった山では、グループを動かす前にスートを確認する必要があります。多くのプレイヤーが日常のテーブルとして選ぶモードです。",
            "**攻略ガイドを読む。** コツは特定の難易度向けではなく、1・2・4スートすべてに当てはまります。",
            "**期待せずに4スートに挑戦する。** 上級者向けテーブルは厳しく、配布によっては勝てないこともあります。1ゲームごとにスートを分ける練習と考えましょう。",
          ],
        },
        { type: "h2", id: "site-help", text: "サイト自体のヘルプ" },
        {
          type: "p",
          text: "スマホの操作は[モバイルガイド](/spider-solitaire-mobile)を、ブラウザの要件や保存される進行状況は[ダウンロード不要のページ](/spider-solitaire-no-download)をご覧ください。ネットワークでゲームサイトがブロックされる場合は、[アクセス制限のページ](/spider-solitaire-unblocked)で自分でできること・できないことを説明しています。",
        },
      ],
    },
  },
};
