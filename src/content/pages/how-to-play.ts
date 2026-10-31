import type { PageDefinition } from "../types";

export const howToPlayPage: PageDefinition = {
  slug: "how-to-play",
  contents: {
    en: {
      metaTitle: "How to Play Spider Solitaire – Complete Walkthrough",
      metaDescription:
        "Learn how to play Spider Solitaire step by step: the 54-card setup, valid moves, same-suit groups, stock deals, empty columns, and controls.",
      title: "How to Play Spider Solitaire",
      description:
        "A complete Spider Solitaire walkthrough covering setup, legal moves, groups, dealing, empty columns, completed runs, and controls.",
      eyebrow: "Beginner walkthrough",
      breadcrumb: "How to Play",
      playHref: "/",
      playLabel: "Play while you read",
      lead: "Spider Solitaire is a two-deck patience game. You build eight descending King-to-Ace runs in the ten tableau columns; each completed run clears to the foundation. This walkthrough gets you from the first deal to your first win, including the rules that trip up new players.",
      related: [
        {
          href: "/spider-solitaire-rules",
          title: "Full Rules Reference",
          description: "The precise version of every rule and edge case.",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "Strategy Guide",
          description: "What to do after the first ten moves.",
        },
        {
          href: "/spider-solitaire-1-suit",
          title: "Beginner Table",
          description: "Start with one suit to learn the movement rules.",
        },
        {
          href: "/spider-solitaire-mobile",
          title: "Mobile Controls",
          description: "Tap and drag controls for phone and tablet play.",
        },
      ],
      faq: [
        {
          q: "How many cards does Spider Solitaire use?",
          a: "104 cards, or two standard decks. Fifty-four cards go into the ten tableau columns and 50 remain in the stock as five deals of ten cards.",
        },
        {
          q: "Can I move any card onto any suit?",
          a: "A single card can move onto the next-higher rank regardless of suit. A group of two or more cards can only move if every card in that group is the same suit and in descending order.",
        },
        {
          q: "Why can't I deal from the stock?",
          a: "Every column must contain at least one card before a stock deal is allowed. Fill any empty column first. The stock is also unavailable when it is empty or the game has ended.",
        },
        {
          q: "Do I have to move a completed King-to-Ace run?",
          a: "No. A complete same-suit run of King down to Ace clears to the foundation automatically as soon as it forms. You do not click or drag it.",
        },
        {
          q: "What do the keyboard shortcuts do?",
          a: "Z undoes the last move, H shows a hint, and Space deals from the stock when a deal is legal. The same actions are available as buttons in the bottom bar.",
        },
      ],
      blocks: [
        { type: "h2", id: "objective", text: "The goal" },
        {
          type: "p",
          text: "Clear the tableau by building **eight complete sequences**, each running from King down to Ace in a single suit. A completed sequence moves to the foundation area automatically. When all eight sequences are cleared, the game is won.",
        },
        {
          type: "p",
          text: "You do not need to clear the columns in order. Progress is measured by how many sequences reach the foundation, and every freed card gives you more room to work.",
        },
        { type: "h2", id: "setup", text: "The opening deal" },
        {
          type: "p",
          text: "Spider uses 104 cards: two standard decks, with the number of suits reduced according to difficulty. The ten tableau columns receive 54 cards in total: four columns get six cards, and six columns get five. Only the bottom card of each column is face up.",
        },
        {
          type: "p",
          text: "The remaining 50 cards form the stock pile, split into five deals of ten cards. The foundation area starts empty. There is no separate discard pile or waste pile.",
        },
        { type: "h2", id: "moves", text: "Legal moves" },
        { type: "p", text: "There are three basic actions:" },
        {
          type: "ol",
          items: [
            "**Move a single card** onto a card of the next-higher rank. Suit does not matter. A seven can go on an eight of any suit.",
            "**Move a same-suit group** onto the next-higher rank. The group must already be in descending order and must share one suit. For example, 9-8-7 of hearts can move together onto a 10 of any suit.",
            "**Move a card or group into an empty column.** Any face-up card or valid same-suit group is allowed. The column does not need a King.",
          ],
        },
        {
          type: "p",
          text: "The suit rule is the important one. A descending column that alternates suits is not a movable group. You can move its top card alone, but not the stack beneath it. This is why two-suit and four-suit tables require more planning than one-suit games.",
        },
        { type: "h2", id: "flipping", text: "Flipping face-down cards" },
        {
          type: "p",
          text: "When you move the last face-up card off a column, the next card underneath flips face up automatically. That flip is the main source of new information and new moves. A good habit is to look for a move that flips a hidden card before you consider dealing from the stock.",
        },
        { type: "h2", id: "dealing", text: "Dealing from the stock" },
        {
          type: "p",
          text: "Click the stock pile in the corner (or press Space) to deal one card onto each of the ten columns. The cards are dealt face up. You may only deal when **every column has at least one card**; if any column is empty, the stock is disabled.",
        },
        {
          type: "p",
          text: "There are five stock deals. Once they are gone, the table must be solved with what is visible. A deal is not a free reset: it adds ten cards that can bury the cards you were trying to reach.",
        },
        { type: "h2", id: "completing", text: "Completing a run" },
        {
          type: "p",
          text: "When a column contains a same-suit sequence from King down to Ace, the sequence clears automatically. The cards move to the foundation, and the card underneath the sequence flips face up if it was face down. Eight completed sequences wins the game.",
        },
        {
          type: "p",
          text: "You do not need to move the King to a special slot. Form the run in a tableau column, and the game detects it. A run that is split across suits does not count, even if the ranks are correct.",
        },
        { type: "h2", id: "controls", text: "Controls on this site" },
        {
          type: "table",
          head: ["Action", "Desktop", "Touch screen"],
          rows: [
            [
              "Move a card or group",
              "Drag it to another column",
              "Tap it, then tap the destination column",
            ],
            ["Undo", "Bottom-bar button or Z", "Bottom-bar undo button"],
            ["Hint", "Bottom-bar button or H", "Bottom-bar hint button"],
            [
              "Deal",
              "Click the stock or press Space",
              "Tap the stock pile",
            ],
            [
              "New game",
              "New game button",
              "New game button in the bottom bar",
            ],
          ],
        },
        {
          type: "p",
          text: "The settings dialog lets you change the card front, card back, felt colour, sound, and default difficulty. An unfinished game is saved locally, so a refresh or a closed tab does not automatically lose your progress.",
        },
        { type: "h2", id: "first-game", text: "A simple first game plan" },
        {
          type: "ol",
          items: [
            "**Scan for face-down columns.** Identify which columns are closest to flipping a card and make those moves first.",
            "**Keep low cards reachable.** Aces and twos are easy to bury. Before covering one, check whether you can still reach it later.",
            "**Open a column.** Moving an entire column elsewhere creates an empty slot. Use it to relocate a King or a long run, then refill it deliberately.",
            "**Deal late.** Use stock deals when tableau moves run out or when a deal is likely to create a new completion, not just because the button is available.",
            "**Use undo to learn.** If you are unsure, try the move, inspect the result, and reverse it. There is no penalty.",
          ],
        },
        {
          type: "note",
          text: "**New-player shortcut:** start on the [1-suit table](/spider-solitaire-1-suit). Every card is a spade, so any descending run moves as a group. Once the movement rules are automatic, move to [2 suits](/spider-solitaire-2-suits).",
        },
      ],
    },

    zh: {
      metaTitle: "蜘蛛纸牌玩法 – 完整图文教程",
      metaDescription:
        "一步步学会蜘蛛纸牌：54 张牌的开局布置、合法移动、同花色牌组、牌堆发牌、空列以及操作方式。",
      title: "蜘蛛纸牌怎么玩",
      description:
        "完整的蜘蛛纸牌新手教程：开局布置、合法移动、牌组、发牌、空列、完成的顺子和操作方式。",
      eyebrow: "新手指南",
      breadcrumb: "玩法",
      playHref: "/",
      playLabel: "边读边玩",
      lead: "蜘蛛纸牌是一款使用两副牌的接龙游戏。你要在十列牌桌上凑出八组从 K 到 A 的递减顺子，每完成一组就会自动收进基础区。这份教程会带你从第一次发牌走到第一次获胜，也会讲清新手最容易踩坑的规则。",
      related: [
        {
          href: "/spider-solitaire-rules",
          title: "完整规则参考",
          description: "每条规则和边界情况的精确版本。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "策略指南",
          description: "开局十步之后该做什么。",
        },
        {
          href: "/spider-solitaire-1-suit",
          title: "新手牌桌",
          description: "从单花色开始熟悉移动规则。",
        },
        {
          href: "/spider-solitaire-mobile",
          title: "手机操作",
          description: "手机和平板上的点按与拖动操作。",
        },
      ],
      faq: [
        {
          q: "蜘蛛纸牌用多少张牌？",
          a: "104 张，也就是两副标准扑克牌。54 张发到十列牌桌，剩下的 50 张留在牌堆，分成五次、每次十张。",
        },
        {
          q: "任何牌都能放到任何花色上吗？",
          a: "单张牌可以放到点数大一位的牌上，不分花色。两张以上的牌组整体移动时，组内每张牌必须是同一花色且按降序排列。",
        },
        {
          q: "为什么我不能从牌堆发牌？",
          a: "发牌前每一列都必须至少有一张牌，先把空列填上。牌堆用完或对局结束时也不能再发牌。",
        },
        {
          q: "完成的 K 到 A 顺子需要我自己移动吗？",
          a: "不需要。同花色从 K 到 A 的完整顺子一旦组成，就会自动收进基础区，不用点击或拖动。",
        },
        {
          q: "键盘快捷键有什么作用？",
          a: "Z 撤销上一步，H 显示提示，空格在允许发牌时从牌堆发牌。底栏按钮也能完成同样的操作。",
        },
      ],
      blocks: [
        { type: "h2", id: "objective", text: "游戏目标" },
        {
          type: "p",
          text: "在牌桌上凑出**八组完整顺子**，每组都是同一花色从 K 递减到 A，就能清空牌桌。完成的顺子会自动移入基础区。八组全部清完，游戏即获胜。",
        },
        {
          type: "p",
          text: "你不需要按顺序清空各列。进度取决于有多少组顺子进入基础区，而每一张被解放的牌都会给你更多腾挪空间。",
        },
        { type: "h2", id: "setup", text: "开局发牌" },
        {
          type: "p",
          text: "蜘蛛纸牌使用 104 张牌，也就是两副标准扑克牌，花色数量会随难度减少。十列牌桌共发 54 张：四列各六张，六列各五张。每列只有最下面一张牌面朝上。",
        },
        {
          type: "p",
          text: "剩下的 50 张组成牌堆，分成五次、每次十张。基础区开局为空。游戏中没有单独的弃牌堆或废牌堆。",
        },
        { type: "h2", id: "moves", text: "合法移动" },
        { type: "p", text: "基本操作有三种：" },
        {
          type: "ol",
          items: [
            "**移动单张牌**到点数大一位的牌上。花色不限，7 可以放到任意花色的 8 上。",
            "**移动同花色牌组**到点数大一位的牌上。牌组本身必须按降序排列且花色相同。例如红桃 9-8-7 可以整体移到任意花色的 10 上。",
            "**把一张牌或一组牌移入空列。** 任何面朝上的牌或合法的同花色牌组都可以。空列不要求放 K。",
          ],
        },
        {
          type: "p",
          text: "花色规则才是关键。一列花色交替的递减牌并不是可移动的牌组：你可以单独移动最上面那张，但不能整体搬走下面的一叠。这也是为什么双花色和四花色牌桌比单花色需要更多规划。",
        },
        { type: "h2", id: "flipping", text: "翻开暗牌" },
        {
          type: "p",
          text: "当一列中最上面的明牌被移走时，下面那张牌会自动翻开。翻牌是新的信息和新的走法最主要的来源。一个好习惯是：在考虑从牌堆发牌之前，先找找有没有能翻开暗牌的走法。",
        },
        { type: "h2", id: "dealing", text: "从牌堆发牌" },
        {
          type: "p",
          text: "点击角落里的牌堆（或按空格键），给十列各发一张牌，牌面朝上。只有当**每一列都至少有一张牌**时才能发牌；只要有一列是空的，牌堆就不可用。",
        },
        {
          type: "p",
          text: "一局共有五次发牌机会，用完之后就只能用手上可见的牌解局。发牌不是免费的重置：它会多加十张牌，可能把你正要够到的牌埋得更深。",
        },
        { type: "h2", id: "completing", text: "完成一组顺子" },
        {
          type: "p",
          text: "当某一列出现同花色从 K 到 A 的连续牌组时，这组牌会自动收进基础区，顺子下面原本背面朝上的牌也会翻开。完成八组顺子即获胜。",
        },
        {
          type: "p",
          text: "你不需要把 K 移到什么特殊位置，只要在牌桌的某一列中凑成顺子，游戏就会自动识别。花色混在一起的顺子不算数，即使点数顺序完全正确。",
        },
        { type: "h2", id: "controls", text: "本站的操作方式" },
        {
          type: "table",
          head: ["操作", "电脑", "触摸屏"],
          rows: [
            ["移动一张牌或一组牌", "拖到另一列", "先点按牌，再点按目标列"],
            ["撤销", "底栏按钮或 Z 键", "底栏的撤销按钮"],
            ["提示", "底栏按钮或 H 键", "底栏的提示按钮"],
            ["发牌", "点击牌堆或按空格键", "点按牌堆"],
            ["新游戏", "新游戏按钮", "底栏中的新游戏按钮"],
          ],
        },
        {
          type: "p",
          text: "设置面板里可以更换牌面、牌背、绒布颜色、音效和默认难度。未完成的对局会保存在本地，刷新页面或关闭标签页不会自动丢掉进度。",
        },
        { type: "h2", id: "first-game", text: "第一局可以这样打" },
        {
          type: "ol",
          items: [
            "**先看哪些列快翻牌。** 找出最接近翻开一张牌的列，优先走那里的棋。",
            "**让低点数牌保持可达。** A 和 2 很容易被埋住。盖住一张之前，先确认之后还能不能重新够到它。",
            "**打开一列。** 把整列搬走就能腾出一个空位。用它临时安置 K 或一条长顺子，再有意地把这个空位填上。",
            "**晚点发牌。** 等牌桌上的走法用完，或者这次发牌很可能促成一组顺子时再发，而不是因为按钮亮着就发。",
            "**用撤销来学习。** 拿不准的时候先走一步、看看结果，再撤回。这没有任何惩罚。",
          ],
        },
        {
          type: "note",
          text: "**新手捷径：** 从[单花色牌桌](/spider-solitaire-1-suit)开始。所有牌都是黑桃，任何递减牌组都能整体移动。等移动规则变成本能，再换到[双花色](/spider-solitaire-2-suits)。",
        },
      ],
    },

    ja: {
      metaTitle: "スパイダーソリティアの遊び方 – 完全ガイド",
      metaDescription:
        "スパイダーソリティアを手順ごとに解説。54枚の初期配置、合法手、同スートのグループ、山札からの配布、空列、操作方法まで。",
      title: "スパイダーソリティアの遊び方",
      description:
        "初期配置、合法手、グループ、配布、空列、完成したラン、操作方法をまとめたスパイダーソリティアの完全ガイドです。",
      eyebrow: "初心者向けガイド",
      breadcrumb: "遊び方",
      playHref: "/",
      playLabel: "読みながらプレイ",
      lead: "スパイダーソリティアは2デッキを使うペイシェンスゲームです。10列の場でKからAへの降順ランを8本作り、完成したランは自動的にファウンデーションへ送られます。このガイドでは最初の配布から初勝利まで、初心者がつまずきやすいルールも含めて解説します。",
      related: [
        {
          href: "/spider-solitaire-rules",
          title: "ルール完全リファレンス",
          description: "すべてのルールと例外を正確に。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "攻略ガイド",
          description: "最初の10手のあとに何をするか。",
        },
        {
          href: "/spider-solitaire-1-suit",
          title: "入門テーブル",
          description: "1スートで動かし方のルールを覚える。",
        },
        {
          href: "/spider-solitaire-mobile",
          title: "モバイル操作",
          description: "スマホ・タブレットでのタップとドラッグ操作。",
        },
      ],
      faq: [
        {
          q: "スパイダーソリティアは何枚のカードを使いますか？",
          a: "104枚、つまり標準的なデッキ2組です。54枚が10列の場に配られ、残りの50枚は山札として10枚ずつ5回分になります。",
        },
        {
          q: "どのカードでも好きなスートの上に置けますか？",
          a: "1枚のカードはスートを問わず、1つ上のランクに置けます。2枚以上のグループを動かすには、グループ内のすべてのカードが同じスートで降順になっている必要があります。",
        },
        {
          q: "山札から配れないのはなぜですか？",
          a: "配布するには、すべての列に最低1枚のカードが必要です。空の列を先に埋めてください。山札が空のときやゲーム終了後も配布できません。",
        },
        {
          q: "完成したKからAのランは自分で動かすのですか？",
          a: "いいえ。同スートでKからAまでのランが完成すると、その時点で自動的にファウンデーションへ送られます。クリックやドラッグは不要です。",
        },
        {
          q: "キーボードショートカットは何をしますか？",
          a: "Zで直前の手を元に戻し、Hでヒントを表示、スペースで配布が可能なときに山札から配ります。同じ操作は下部バーのボタンからも行えます。",
        },
      ],
      blocks: [
        { type: "h2", id: "objective", text: "ゲームの目的" },
        {
          type: "p",
          text: "場に**8本の完全なラン**を作って片付けます。それぞれが1つのスートでKからAへ降順に並びます。完成したランは自動的にファウンデーションへ移動します。8本すべてを片付ければ勝利です。",
        },
        {
          type: "p",
          text: "列を順番に片付ける必要はありません。進行状況はファウンデーションに送られたランの数で決まり、カードが1枚解放されるたびに動かせる余地が増えます。",
        },
        { type: "h2", id: "setup", text: "最初の配布" },
        {
          type: "p",
          text: "スパイダーソリティアは104枚、標準デッキ2組を使い、難易度に応じてスートの数が減ります。10列の場には合計54枚が配られます。4列に6枚、6列に5枚です。各列で表向きなのは一番下の1枚だけです。",
        },
        {
          type: "p",
          text: "残りの50枚が山札となり、10枚ずつ5回分に分かれます。ファウンデーションは最初は空です。捨て札やウェイストの山はありません。",
        },
        { type: "h2", id: "moves", text: "合法手" },
        { type: "p", text: "基本の操作は3つです。" },
        {
          type: "ol",
          items: [
            "**1枚のカードを動かす。** 1つ上のランクのカードの上に置きます。スートは問いません。7はどのスートの8の上にも置けます。",
            "**同スートのグループを動かす。** 1つ上のランクの上に置きます。グループはすでに降順で、1つのスートでまとまっている必要があります。たとえばハートの9-8-7は、どのスートの10の上にもまとめて動かせます。",
            "**カードまたはグループを空列へ動かす。** 表向きのカードなら1枚でも、合法な同スートのグループでも構いません。空列にKは必要ありません。",
          ],
        },
        {
          type: "p",
          text: "重要なのはスートのルールです。スートが交互に入れ替わる降順の列は、まとめて動かせるグループではありません。一番上のカードだけは動かせますが、その下の重なりは動かせません。2スートや4スートのテーブルが1スートより計画性を求められる理由がここにあります。",
        },
        { type: "h2", id: "flipping", text: "裏向きのカードをめくる" },
        {
          type: "p",
          text: "列から最後の表向きカードを動かすと、その下のカードが自動的に表向きになります。このめくりが新しい情報と新しい手の主な源です。山札から配る前に、裏向きのカードをめくれる手がないか探すのが良い習慣です。",
        },
        { type: "h2", id: "dealing", text: "山札からの配布" },
        {
          type: "p",
          text: "隅の山札をクリックする（またはスペースキーを押す）と、10列それぞれに1枚ずつ表向きで配られます。配布できるのは**すべての列に少なくとも1枚のカードがある**ときだけです。空の列が1つでもあると山札は使えません。",
        },
        {
          type: "p",
          text: "配布は5回までです。使い切ったら、見えているカードだけで場を解くことになります。配布は無料のリセットではありません。10枚のカードが加わり、届かせたかったカードを埋めてしまうことがあります。",
        },
        { type: "h2", id: "completing", text: "ランを完成させる" },
        {
          type: "p",
          text: "列に同スートでKからAまでの連続した並びができると、そのランは自動的に片付きます。カードはファウンデーションへ移り、ランの下にあった裏向きのカードは表向きになります。8本のランを完成させれば勝利です。",
        },
        {
          type: "p",
          text: "Kを特別な場所へ動かす必要はありません。場の列の中でランを作れば、ゲームが自動的に認識します。ランがスートをまたいで分かれている場合は、ランクが正しくても完成とはみなされません。",
        },
        { type: "h2", id: "controls", text: "このサイトの操作方法" },
        {
          type: "table",
          head: ["操作", "PC", "タッチ画面"],
          rows: [
            [
              "カードまたはグループを動かす",
              "別の列へドラッグ",
              "カードをタップし、移動先の列をタップ",
            ],
            ["元に戻す", "下部バーのボタンまたはZ", "下部バーの元に戻すボタン"],
            ["ヒント", "下部バーのボタンまたはH", "下部バーのヒントボタン"],
            ["配布", "山札をクリックまたはスペースキー", "山札をタップ"],
            [
              "新しいゲーム",
              "新しいゲームボタン",
              "下部バーの新しいゲームボタン",
            ],
          ],
        },
        {
          type: "p",
          text: "設定ダイアログでは、カードの表、カードの裏、フェルトの色、サウンド、デフォルトの難易度を変更できます。未完了のゲームはローカルに保存されるため、再読み込みやタブを閉じても進行状況がすぐに失われることはありません。",
        },
        { type: "h2", id: "first-game", text: "初めてのゲームの進め方" },
        {
          type: "ol",
          items: [
            "**裏向きの列を探す。** どの列がカードをめくるのに近いかを見極め、そこから動かします。",
            "**低いカードを届く位置に残す。** Aや2は埋もれやすいカードです。覆う前に、あとでまた届くかを確認しましょう。",
            "**列を空ける。** 列ごと別の場所へ動かすと空きができます。Kや長いランを移すのに使い、その後は意識して埋めます。",
            "**配布は遅らせる。** 場の手が尽きたとき、または配布でランが完成しそうなときに山札を使います。ボタンが押せるからといって配らないようにしましょう。",
            "**元に戻すで学ぶ。** 迷ったら手を試し、結果を見てから戻します。ペナルティはありません。",
          ],
        },
        {
          type: "note",
          text: "**初心者向けの近道：** [1スートのテーブル](/spider-solitaire-1-suit)から始めましょう。すべてスペードなので、降順のランはまとめて動かせます。動かし方が自然になったら[2スート](/spider-solitaire-2-suits)へ進んでください。",
        },
      ],
    },
  },
};
