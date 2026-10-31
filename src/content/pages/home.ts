import type { PageDefinition } from "../types";

export const homePage: PageDefinition = {
  slug: "",
  contents: {
    en: {
      metaTitle: "Spider Solitaire – Play Free Online",
      metaDescription:
        "Play Spider Solitaire online free in your browser. Two suits is the default table, with 1-suit and 4-suit modes, undo, hints, and no download or sign-up.",
      title: "Play Spider Solitaire Online Free",
      description:
        "Play free Spider Solitaire in your browser with 2 suits as the default, plus 1-suit and 4-suit modes, undo, hints, and local stats.",
      eyebrow: "Free browser card game",
      lead: "A full Spider Solitaire table, ready in one click. The default game is **2 suits** — the balanced middle difficulty — with 1-suit and 4-suit tables one setting away. No download, no sign-up, and no waiting for a table.",
      playable: true,
      hideBreadcrumbs: true,
      playHref: "#article-body",
      playLabel: "How this table works",
      game: {
        name: "Spider Solitaire – SpiderDeck",
        description:
          "Free browser Spider Solitaire with 1, 2, and 4-suit tables, undo, hints, statistics, and a responsive layout.",
        suits: 2,
      },
      related: [
        {
          href: "/spider-solitaire-2-suits",
          title: "Spider Solitaire 2 Suits",
          description:
            "Why two suits is the everyday mode, plus a focused strategy guide.",
        },
        {
          href: "/how-to-play",
          title: "How to Play Spider Solitaire",
          description:
            "Setup, legal moves, dealing rules, and controls in one walkthrough.",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "Spider Solitaire Strategy",
          description:
            "Ten practical habits that improve win rate without counting cards.",
        },
        {
          href: "/spider-solitaire-mobile",
          title: "Play on Mobile",
          description:
            "How tap-to-move works on a phone and what to do on a small screen.",
        },
      ],
      faq: [
        {
          q: "Is Spider Solitaire free to play here?",
          a: "Yes. The game is free, runs in your browser, and does not require an account, install, or payment. There are no ads inside the card table.",
        },
        {
          q: "Which difficulty does the game start with?",
          a: "The table starts with 2 suits, the middle difficulty. You can switch to 1 suit or 4 suits from the settings menu, or open a dedicated difficulty page and start that mode directly.",
        },
        {
          q: "Can I play on a phone or tablet?",
          a: "Yes. The board scales to fit the screen, cards can be dragged or moved with two taps, and the controls sit in a bottom bar designed for touch. See the mobile guide for details.",
        },
        {
          q: "Does the game save my progress?",
          a: "An unfinished game, your statistics, and your preferences are stored locally in your browser. Clearing site data or switching browsers removes them. Nothing is tied to an account.",
        },
        {
          q: "Is there a daily challenge?",
          a: "Not at the moment. Every new game uses a fresh random deal. The guides explain how to practise specific skills with 1-suit and 4-suit tables instead.",
        },
        {
          q: "How is a game scored?",
          a: "This version tracks your move count and elapsed time rather than points. Fewer moves and a faster finish are the simplest ways to compare two games at the same difficulty.",
        },
      ],
      blocks: [
        { type: "h2", id: "why-play", text: "A clean table, not a casino lobby" },
        {
          type: "p",
          text: "This page is the game and nothing else at the top: ten columns, a stock pile, eight foundation slots, and a bottom bar with undo, hint, statistics, settings, and a new-game button. The design is built around reading the board quickly, whether you are on a 27-inch monitor or a phone in portrait mode.",
        },
        {
          type: "p",
          text: "The engine supports all three standard Spider Solitaire difficulties. Two suits are the default because the mode sits in the sweet spot: more variety than a single-suit teaching table, far less chaos than four suits. If you are new, start with [1 suit](/spider-solitaire-1-suit). If you already know the rhythm and want the classic expert test, open [4 suits](/spider-solitaire-4-suits).",
        },
        {
          type: "cards",
          items: [
            {
              href: "/spider-solitaire-1-suit",
              title: "1 suit — beginner",
              description:
                "Eight copies of spades. Learn how runs move, how empty columns work, and how a deal changes the table.",
            },
            {
              href: "/spider-solitaire-2-suits",
              title: "2 suits — recommended",
              description:
                "Spades and hearts. The everyday table: mixed stacks appear, but same-suit runs are still reachable.",
            },
            {
              href: "/spider-solitaire-4-suits",
              title: "4 suits — expert",
              description:
                "Two decks across all four suits. The classic version most people mean when they say Spider Solitaire.",
            },
            {
              href: "/spider-solitaire-rules",
              title: "Rules reference",
              description:
                "The short version of every rule: legal moves, dealing, empty columns, and completed sequences.",
            },
          ],
        },
        { type: "h2", id: "how-a-game-works", text: "How a game of Spider works" },
        {
          type: "ol",
          items: [
            "**Deal:** 54 cards go into ten columns. Four columns get six cards and six columns get five; only the top card of each column is face up. The remaining 50 cards form five stock deals of ten cards each.",
            "**Build:** Move a card onto the next-higher rank. A single card can land on any suit. A group only moves together when it is a descending, same-suit run.",
            "**Deal again:** Click the stock pile to place one card on every column. All ten columns must contain at least one card first.",
            "**Finish:** A complete King-to-Ace run in one suit clears to the foundation automatically. Clear eight runs to win.",
          ],
        },
        { type: "h2", id: "features", text: "What is included" },
        {
          type: "ul",
          items: [
            "1-suit, 2-suit, and 4-suit tables with a fresh random deal.",
            "Unlimited undo and a hint button that highlights a legal move.",
            "Move count, timer, and per-difficulty win statistics saved locally.",
            "Drag-and-drop on desktop, tap-to-move on touch screens.",
            "Card fronts, card backs, and felt colours that can be changed in settings.",
            "Resume support: an interrupted game reopens where you left it.",
          ],
        },
        { type: "h2", id: "start", text: "Not sure where to start?" },
        {
          type: "p",
          text: "Open the [2-suit guide](/spider-solitaire-2-suits) if you want the reasoning behind the default table. Read [how to play](/how-to-play) if this is your first Spider game. If deals keep going wrong, the [strategy guide](/spider-solitaire-strategy) covers the habits that matter most: exposing face-down cards, protecting empty columns, and delaying the stock.",
        },
        {
          type: "note",
          text: "**Quick tip:** before you deal from the stock, look for a move that flips a face-down card. A deal is easy to spend and hard to undo. The stock is a resource, not a reset button.",
        },
      ],
    },

    zh: {
      metaTitle: "蜘蛛纸牌 – 免费在线游玩",
      metaDescription:
        "在浏览器里免费在线玩蜘蛛纸牌。默认双花色牌桌，另有单花色和四花色模式，支持撤销、提示，无需下载或注册。",
      title: "免费在线玩蜘蛛纸牌",
      description:
        "在浏览器里免费玩蜘蛛纸牌，默认双花色，并提供单花色和四花色模式，支持撤销、提示和本地统计。",
      eyebrow: "免费浏览器纸牌游戏",
      lead: "一张完整、点开即玩的蜘蛛纸牌牌桌。默认是**双花色**——平衡的中等难度——单花色和四花色牌桌也只需一个设置。无需下载，无需注册，也不用等牌桌。",
      playable: true,
      hideBreadcrumbs: true,
      playHref: "#article-body",
      playLabel: "这张牌桌怎么运作",
      game: {
        name: "蜘蛛纸牌 – SpiderDeck",
        description:
          "免费浏览器蜘蛛纸牌，支持 1、2、4 花色牌桌、撤销、提示、统计和自适应布局。",
        suits: 2,
      },
      related: [
        {
          href: "/spider-solitaire-2-suits",
          title: "蜘蛛纸牌双花色",
          description: "为什么双花色是日常模式，并附一份聚焦的攻略。",
        },
        {
          href: "/how-to-play",
          title: "蜘蛛纸牌玩法",
          description: "发牌、合法移动、发牌规则和操作方式，一篇讲完。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "蜘蛛纸牌策略",
          description: "十个实用习惯，不记牌也能提高胜率。",
        },
        {
          href: "/spider-solitaire-mobile",
          title: "手机版游玩",
          description: "手机上的点按移动如何运作，小屏幕该注意什么。",
        },
      ],
      faq: [
        {
          q: "这里的蜘蛛纸牌免费吗？",
          a: "免费。游戏在你浏览器中运行，不需要账号、安装或付款，牌桌内也没有广告。",
        },
        {
          q: "游戏以哪个难度开始？",
          a: "牌桌默认双花色，也就是中等难度。你可以在设置菜单中切换到单花色或四花色，也可以直接打开对应难度页面开始该模式。",
        },
        {
          q: "可以在手机或平板上玩吗？",
          a: "可以。牌桌会随屏幕缩放，牌既能拖动也能两次点按移动，操作按钮位于专为触控设计的底栏。详细说明见手机版指南。",
        },
        {
          q: "游戏会保存我的进度吗？",
          a: "未完成的对局、统计数据和偏好设置都保存在浏览器本地。清除站点数据或更换浏览器会移除它们，这些信息不与账号绑定。",
        },
        {
          q: "有每日挑战吗？",
          a: "目前没有。每局新游戏都是随机发牌。你可以用单花色和四花色牌桌练习特定技巧，指南中有说明。",
        },
        {
          q: "游戏如何计分？",
          a: "这个版本记录步数和用时，而不是分数。在相同难度下，步数更少、完成更快就是最直观的比较方式。",
        },
      ],
      blocks: [
        { type: "h2", id: "why-play", text: "一张干净的牌桌，而不是赌场大厅" },
        {
          type: "p",
          text: "这个页面顶部就是游戏本身：十列牌、一个牌堆、八个基础区位置，以及带撤销、提示、统计、设置和新游戏按钮的底栏。设计围绕快速读取牌局展开，无论你用的是 27 英寸显示器还是竖屏手机。",
        },
        {
          type: "p",
          text: "引擎支持蜘蛛纸牌的三种标准难度。默认双花色，因为这个模式恰到好处：比单花色教学牌桌更多变化，又远没有四花色那么混乱。如果你是新手，从[单花色](/spider-solitaire-1-suit)开始；如果你已经熟悉节奏、想要经典的高手挑战，打开[四花色](/spider-solitaire-4-suits)。",
        },
        {
          type: "cards",
          items: [
            {
              href: "/spider-solitaire-1-suit",
              title: "单花色 — 入门",
              description:
                "八副黑桃。学习牌组如何移动、空列如何运作，以及发牌如何改变牌桌。",
            },
            {
              href: "/spider-solitaire-2-suits",
              title: "双花色 — 推荐",
              description:
                "黑桃和红桃。日常牌桌：混合牌堆会出现，但同花顺仍然够得着。",
            },
            {
              href: "/spider-solitaire-4-suits",
              title: "四花色 — 专家",
              description:
                "两副牌覆盖全部四种花色。大多数人说起蜘蛛纸牌时，指的就是这个经典版本。",
            },
            {
              href: "/spider-solitaire-rules",
              title: "规则速查",
              description:
                "每条规则的简短版本：合法移动、发牌、空列和完成的顺子。",
            },
          ],
        },
        { type: "h2", id: "how-a-game-works", text: "蜘蛛纸牌一局怎么玩" },
        {
          type: "ol",
          items: [
            "**发牌：** 54 张牌发到十列。四列各六张，六列各五张；每列只有最上面一张牌面朝上。剩下的 50 张组成牌堆，分五次、每次十张。",
            "**搭建：** 把牌移到点数大一位的牌上。单张牌可以落在任何花色上；只有同花色、递减的连续牌组才能整体移动。",
            "**再次发牌：** 点击牌堆，给每一列各发一张牌。发牌前十列都必须至少有一张牌。",
            "**完成：** 同一花色中从 K 到 A 的完整顺子会自动清到基础区。清掉八组即获胜。",
          ],
        },
        { type: "h2", id: "features", text: "包含哪些功能" },
        {
          type: "ul",
          items: [
            "单花色、双花色和四花色牌桌，每局随机发牌。",
            "无限撤销，以及会高亮合法移动的提示按钮。",
            "步数、计时器，以及按难度保存到本地的胜率统计。",
            "桌面端拖放，触摸屏点按移动。",
            "可在设置中更换牌面、牌背和绒布颜色。",
            "断点续玩：中断的对局会从你离开的地方重新打开。",
          ],
        },
        { type: "h2", id: "start", text: "不确定从哪里开始？" },
        {
          type: "p",
          text: "想要默认牌桌背后的理由，打开[双花色指南](/spider-solitaire-2-suits)。如果这是你的第一局蜘蛛纸牌，先读[玩法说明](/how-to-play)。如果发牌总是出错，[策略指南](/spider-solitaire-strategy)涵盖了最重要的习惯：翻开暗牌、保护空列、推迟发牌。",
        },
        {
          type: "note",
          text: "**小提示：** 从牌堆发牌之前，先找一步能翻开暗牌的移动。发牌很容易用掉，却很难收回。牌堆是资源，不是重置按钮。",
        },
      ],
    },

    ja: {
      metaTitle: "スパイダーソリティア – 無料オンラインプレイ",
      metaDescription:
        "ブラウザで無料のスパイダーソリティアをオンラインプレイ。デフォルトは2スートで、1スート・4スートも選べます。元に戻す、ヒント付き、ダウンロード・登録不要。",
      title: "スパイダーソリティアを無料でオンラインプレイ",
      description:
        "ブラウザで無料のスパイダーソリティア。デフォルトは2スートで、1スート・4スートも選べます。元に戻す、ヒント、ローカル統計付き。",
      eyebrow: "無料ブラウザカードゲーム",
      lead: "ワンクリックで始まる本格的なスパイダーソリティアのテーブル。デフォルトは**2スート**というバランスの取れた中間難易度で、1スートと4スートのテーブルも設定ひとつで切り替えられます。ダウンロードも登録も、順番待ちもありません。",
      playable: true,
      hideBreadcrumbs: true,
      playHref: "#article-body",
      playLabel: "このテーブルの仕組み",
      game: {
        name: "スパイダーソリティア – SpiderDeck",
        description:
          "無料のブラウザ版スパイダーソリティア。1・2・4スートのテーブル、元に戻す、ヒント、統計、レスポンシブレイアウトを搭載。",
        suits: 2,
      },
      related: [
        {
          href: "/spider-solitaire-2-suits",
          title: "2スートのスパイダーソリティア",
          description:
            "2スートが日常的なモードである理由と、集中した攻略ガイド。",
        },
        {
          href: "/how-to-play",
          title: "スパイダーソリティアの遊び方",
          description: "配布、合法手、配り直しのルール、操作をひとまとめに。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "スパイダーソリティア攻略",
          description: "カードを数えずに勝率を上げる10の習慣。",
        },
        {
          href: "/spider-solitaire-mobile",
          title: "モバイルでプレイ",
          description:
            "スマホでのタップ移動の仕組みと、小さい画面での注意点。",
        },
      ],
      faq: [
        {
          q: "ここのスパイダーソリティアは無料ですか？",
          a: "はい。無料で、ブラウザ上で動作し、アカウント・インストール・支払いは不要です。カードテーブル内に広告もありません。",
        },
        {
          q: "ゲームはどの難易度で始まりますか？",
          a: "テーブルは中間難易度の2スートで始まります。設定メニューから1スートまたは4スートに切り替えられるほか、難易度別ページからそのモードを直接開始できます。",
        },
        {
          q: "スマホやタブレットでも遊べますか？",
          a: "はい。ボードは画面に合わせて拡大縮小し、カードはドラッグまたは2回タップで移動できます。操作はタッチ向けの下部バーにまとまっています。詳しくはモバイルガイドをご覧ください。",
        },
        {
          q: "進行状況は保存されますか？",
          a: "未完了のゲーム、統計、設定はブラウザのローカルに保存されます。サイトデータを消去したりブラウザを変更すると失われます。アカウントとは連携していません。",
        },
        {
          q: "デイリーチャレンジはありますか？",
          a: "現在はありません。新しいゲームは毎回ランダムな配布です。代わりに1スートや4スートのテーブルで特定のスキルを練習する方法をガイドで説明しています。",
        },
        {
          q: "スコアはどのように計算されますか？",
          a: "このバージョンではポイントではなく手数と経過時間を記録します。同じ難易度なら、手数が少なく早く終わるほど良い結果です。",
        },
      ],
      blocks: [
        {
          type: "h2",
          id: "why-play",
          text: "カジノのロビーではなく、すっきりしたテーブル",
        },
        {
          type: "p",
          text: "ページ上部にあるのはゲームそのものです。10列のカード、山札、8つのファウンデーションスロット、そして元に戻す・ヒント・統計・設定・新しいゲームのボタンを備えた下部バー。27インチのモニターでも縦向きのスマホでも、盤面を素早く読めるように設計しています。",
        },
        {
          type: "p",
          text: "エンジンはスパイダーソリティアの3つの標準難易度すべてに対応しています。デフォルトが2スートなのは、このモードがちょうど良いバランスだからです。1スートの入門テーブルより変化に富み、4スートほど混沌としていません。初めてなら[1スート](/spider-solitaire-1-suit)から始めてください。リズムを覚えてクラシックな上級者向けに挑戦したいなら[4スート](/spider-solitaire-4-suits)を開きましょう。",
        },
        {
          type: "cards",
          items: [
            {
              href: "/spider-solitaire-1-suit",
              title: "1スート — 入門",
              description:
                "スペード8組。ランの動かし方、空列の使い方、配布でテーブルがどう変わるかを学べます。",
            },
            {
              href: "/spider-solitaire-2-suits",
              title: "2スート — おすすめ",
              description:
                "スペードとハート。混ざった山も現れますが、同スートのランはまだ狙える日常的なテーブルです。",
            },
            {
              href: "/spider-solitaire-4-suits",
              title: "4スート — 上級",
              description:
                "4スートすべてを2デッキで。一般に「スパイダーソリティア」といえばこのクラシック版です。",
            },
            {
              href: "/spider-solitaire-rules",
              title: "ルール早見表",
              description:
                "合法手、配布、空列、完成したランなど、すべてのルールの短縮版。",
            },
          ],
        },
        {
          type: "h2",
          id: "how-a-game-works",
          text: "スパイダーソリティアの1ゲームの流れ",
        },
        {
          type: "ol",
          items: [
            "**配布：** 54枚を10列に配ります。4列は6枚、6列は5枚で、各列の一番上だけが表向きです。残りの50枚は山札となり、10枚ずつ5回分に分かれます。",
            "**積む：** カードを1つ上のランクに置きます。1枚ならスートは問いません。2枚以上のグループは、同スートで降順のランだけまとめて動かせます。",
            "**配り直し：** 山札をクリックすると各列に1枚ずつ配られます。その前に10列すべてへ最低1枚必要です。",
            "**完成：** 同スートでKからAまでのランができると自動的にファウンデーションへ送られます。8つのランを完成させれば勝利です。",
          ],
        },
        { type: "h2", id: "features", text: "搭載機能" },
        {
          type: "ul",
          items: [
            "1・2・4スートのテーブルと、毎回ランダムな配布。",
            "無制限の元に戻すと、合法手を強調するヒントボタン。",
            "手数、タイマー、難易度別の勝率統計をローカルに保存。",
            "PCではドラッグ＆ドロップ、タッチ画面ではタップ移動。",
            "設定でカード表・カード裏・フェルトの色を変更可能。",
            "中断したゲームは続きから再開できます。",
          ],
        },
        { type: "h2", id: "start", text: "どこから始めればいい？" },
        {
          type: "p",
          text: "デフォルトのテーブルについて知りたいなら[2スートガイド](/spider-solitaire-2-suits)を。初めてのスパイダーゲームなら[遊び方](/how-to-play)を読んでください。配布がうまくいかないときは、[攻略ガイド](/spider-solitaire-strategy)が重要な習慣を解説します。裏向きのカードを表にする、空列を守る、山札を遅らせる、の3つです。",
        },
        {
          type: "note",
          text: "**ちょっとしたコツ：** 山札から配る前に、裏向きのカードをめくれる手を探しましょう。配布は使いやすい一方で、取り消すのは難しいです。山札はリセットボタンではなく資源です。",
        },
      ],
    },
  },
};
