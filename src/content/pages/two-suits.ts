import type { PageDefinition } from "../types";

export const twoSuitsPage: PageDefinition = {
  slug: "spider-solitaire-2-suits",
  contents: {
    en: {
      metaTitle: "Spider Solitaire 2 Suits – Play Free Online",
      metaDescription:
        "Play Spider Solitaire 2 suits free in your browser. Learn the two-suit rules, how mixed stacks change the game, and the strategy that keeps runs moving.",
      title: "Spider Solitaire 2 Suits",
      description:
        "Play Spider Solitaire 2 suits free online. Two-suit rules, strategy, and a full browser table with undo, hints, and local statistics.",
      eyebrow: "Two-suit table",
      lead: "**Spider Solitaire 2 suits** is the balanced middle difficulty: more demanding than a single-suit teaching game, far less brutal than the four-suit classic. This page starts a two-suit table immediately, and the guide below explains how the mode works.",
      playable: true,
      difficulty: 2,
      playHref: "/",
      playLabel: "Play the 2-suit table",
      breadcrumb: "2 Suits",
      game: {
        name: "Spider Solitaire 2 Suits",
        description:
          "Free two-suit Spider Solitaire in the browser with undo, hints, statistics, and a touch-friendly layout.",
        suits: 2,
      },
      related: [
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "1 vs 2 vs 4 Suits",
          description: "Compare deck composition, difficulty, and win rates.",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "Strategy Guide",
          description:
            "The habits that separate a planned table from a lucky one.",
        },
        {
          href: "/spider-solitaire-1-suit",
          title: "Play 1 Suit",
          description:
            "A gentler table for learning how runs and deals work.",
        },
        {
          href: "/spider-solitaire-4-suits",
          title: "Play 4 Suits",
          description:
            "The classic expert version with all four suits in play.",
        },
      ],
      faq: [
        {
          q: "What does 2-suit Spider Solitaire mean?",
          a: "It is standard Spider Solitaire played with two suits instead of four. The 104-card deck is made from spades and hearts only, giving you four copies of every rank in each suit. You still build eight King-to-Ace runs.",
        },
        {
          q: "Is 2 suits harder than 1 suit?",
          a: "Yes. With one suit, every descending run is automatically a same-suit run. Two suits introduce mixed stacks, so you have to plan which cards can move together. Most players find it noticeably harder than 1 suit but much more forgiving than 4 suits.",
        },
        {
          q: "Is 2-suit Spider the default here?",
          a: "Yes. The main table opens with two suits. You can switch to 1 suit or 4 suits in settings before starting a new game, or open a dedicated difficulty page.",
        },
        {
          q: "How many cards are used in a 2-suit game?",
          a: "All 104 cards are used: two full decks reduced to spades and hearts. Fifty-four cards start on the tableau, and the remaining 50 are dealt in five stock rounds of ten.",
        },
        {
          q: "Can I change difficulty in the middle of a game?",
          a: "No. Difficulty is fixed for the current deal. Starting a different mode begins a new game, so finish or abandon the current table first if you want to compare results fairly.",
        },
        {
          q: "How long does a 2-suit game take?",
          a: "A careful game often takes 10 to 30 minutes. New players can take longer because mixed-suit stacks require more checking. Use undo to explore a line without committing to it.",
        },
      ],
      blocks: [
        { type: "h2", id: "what-two-suits-means", text: "What two suits actually change" },
        {
          type: "p",
          text: "A two-suit game uses the same 104 cards, ten columns, eight completed runs, and five stock deals as every other Spider variant. The difference is the deck recipe. Instead of four suits with two copies of each rank, the game uses two suits with four copies of each rank. There are still 104 cards, but every spade and heart appears more often.",
        },
        {
          type: "p",
          text: "That produces the mode's signature problem: a column can look like a clean descending run until you notice two suits woven together. A single card may sit on the next-higher rank regardless of suit, but a **group only moves when every card in that group shares a suit**. Two suits create just enough mismatches to punish careless stacking.",
        },
        { type: "h2", id: "why-play", text: "Why two suits is the everyday mode" },
        {
          type: "p",
          text: "One suit is a tutorial. Four suits is a test. Two suits is the table you can play on a lunch break without either falling asleep or losing every deal. It keeps the planning that makes Spider interesting while leaving enough breathing room to recover from a questionable move.",
        },
        {
          type: "p",
          text: "If you are moving up from [1 suit](/spider-solitaire-1-suit), expect the first few games to feel surprisingly awkward. The rules have not changed; your habit of treating every descending run as movable has. Slow down for the first ten moves and check the suits before you drag a stack.",
        },
        { type: "h2", id: "rules", text: "Two-suit rules in one screen" },
        {
          type: "ul",
          items: [
            "**Tableau:** 54 cards in ten columns, with four columns of six and six columns of five. Only the bottom card of each column starts face up.",
            "**Build:** descending rank, any suit for a single card. A multi-card group must be a same-suit descending run.",
            "**Empty columns:** any card or valid same-suit run can move into an empty column.",
            "**Deal:** click the stock to add one face-up card to each column. Every column must be non-empty. There are five deals.",
            "**Complete a run:** King down to Ace in one suit clears automatically. Eight cleared runs wins the game.",
          ],
        },
        {
          type: "p",
          text: "The full wording, including edge cases such as moving part of a run and why a deal is blocked, is in the [rules guide](/spider-solitaire-rules).",
        },
        { type: "h2", id: "strategy", text: "Strategy that matters more with two suits" },
        { type: "h3", text: "1. Keep suits separated whenever the cost is low" },
        {
          type: "p",
          text: "A same-suit run is future mobility. A mixed run is a stack you may have to take apart later. If two legal moves achieve the same rank progress, choose the one that keeps a single suit together. This is the single most useful two-suit habit.",
        },
        { type: "h3", text: "2. Do not spend the stock early" },
        {
          type: "p",
          text: "Each deal adds ten cards you did not choose. Before you click the stock, make every tableau move that exposes a face-down card or empties a column. A deal taken too early buries cards you were about to free.",
        },
        { type: "h3", text: "3. Treat empty columns as tools, not storage" },
        {
          type: "p",
          text: "An empty column can hold a King, a partial run, or a temporary stack while you rearrange another column. The mistake is filling every empty column with the first King you find. Leave one open if you can.",
        },
        { type: "h3", text: "4. Count the suits before you move a group" },
        {
          type: "p",
          text: "Before dragging a stack, read it from top to bottom. If the ranks descend but the suits alternate, only the top card can move alone. Many lost two-suit games start with a group that looked uniform at a glance.",
        },
        { type: "h3", text: "5. Use undo as a planning tool" },
        {
          type: "p",
          text: "Undo is unlimited. On a difficult table, try a move, look at the new layout, and reverse it if the position gets worse. This is faster than staring at the same board for five minutes.",
        },
        { type: "h2", id: "common-mistakes", text: "Three common two-suit mistakes" },
        {
          type: "ol",
          items: [
            "**Burying an Ace under a mixed stack.** Aces only clear when a full King-to-Ace run forms. Keep low cards reachable rather than covering them with convenient rank matches.",
            "**Dealing with an empty column.** The stock is disabled until every column has a card. Fill the gap intentionally instead of dropping a random card into it just to unlock the deal.",
            "**Chasing a single long run.** Spider rewards eight completed runs, not one beautiful column. Spread progress across the table and keep multiple suits moving.",
          ],
        },
        { type: "h2", id: "next", text: "Where to go next" },
        {
          type: "p",
          text: "If two suits still feels fast, drop to [1 suit](/spider-solitaire-1-suit) for a few games and focus on exposing cards. If you are winning regularly, try [4 suits](/spider-solitaire-4-suits) and expect a much lower win rate. The [difficulty comparison](/spider-solitaire-difficulty-levels) explains the jump in plain numbers.",
        },
      ],
    },

    zh: {
      metaTitle: "蜘蛛纸牌双花色 – 免费在线游玩",
      metaDescription:
        "在浏览器中免费在线玩蜘蛛纸牌双花色。了解双花色规则、混合牌堆如何改变游戏，以及让顺子持续推进的实用策略。",
      title: "蜘蛛纸牌双花色",
      description:
        "免费在线玩蜘蛛纸牌双花色。双花色规则、策略，以及支持撤销、提示和本地统计的完整浏览器牌桌。",
      eyebrow: "双花色牌桌",
      lead: "**蜘蛛纸牌双花色**是平衡的中等难度：比单花色教学局更有挑战，又远没有四花色经典版那样严酷。本页会立即发好一副双花色牌桌，下面的指南将说明这个模式的玩法。",
      playable: true,
      difficulty: 2,
      playHref: "/",
      playLabel: "开始双花色牌桌",
      breadcrumb: "双花色",
      game: {
        name: "蜘蛛纸牌双花色 – SpiderDeck",
        description:
          "免费的浏览器版蜘蛛纸牌双花色，支持撤销、提示、统计和适合触控的布局。",
        suits: 2,
      },
      related: [
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "单花色、双花色与四花色对比",
          description: "比较牌组构成、难度和胜率。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "策略指南",
          description: "区分从容布局与侥幸过关的习惯。",
        },
        {
          href: "/spider-solitaire-1-suit",
          title: "玩单花色",
          description: "更温和的牌桌，适合学习顺子和发牌如何运作。",
        },
        {
          href: "/spider-solitaire-4-suits",
          title: "玩四花色",
          description: "四种花色全部上场的经典高手版本。",
        },
      ],
      faq: [
        {
          q: "双花色蜘蛛纸牌是什么意思？",
          a: "这是用两种花色代替四种花色进行的标准蜘蛛纸牌。104 张牌只由黑桃和红桃组成，每个点数在每种花色中有四张。你仍然要完成八组从 K 到 A 的顺子。",
        },
        {
          q: "双花色比单花色更难吗？",
          a: "是的。单花色时，任何递减牌组都自动是同花色顺子。双花色引入了混合牌堆，你必须规划哪些牌能一起移动。多数玩家觉得它明显比单花色难，但比四花色宽容得多。",
        },
        {
          q: "双花色是这里的默认模式吗？",
          a: "是的。主牌桌默认双花色。你可以在开始新游戏前于设置中切换到单花色或四花色，也可以直接打开对应的难度页面。",
        },
        {
          q: "双花色一局用多少张牌？",
          a: "全部 104 张都会用到：两副完整的牌只保留黑桃和红桃。54 张牌发到牌桌，剩余 50 张分成五次、每次十张作为牌堆。",
        },
        {
          q: "可以在对局中途更改难度吗？",
          a: "不能。难度在本次发牌后就固定了。切换到其他模式会开始新的一局，所以想公平比较成绩，请先完成或放弃当前牌桌。",
        },
        {
          q: "双花色一局要多久？",
          a: "认真打一局通常需要 10 到 30 分钟。新手可能更久，因为混合花色的牌堆需要更多检查。可以用撤销试探一条路线，而不必真的走上去。",
        },
      ],
      blocks: [
        { type: "h2", id: "what-two-suits-means", text: "双花色究竟改变了什么" },
        {
          type: "p",
          text: "双花色对局和其他所有蜘蛛纸牌变体一样，使用 104 张牌、十列、八组完成的顺子和五次发牌。区别在于牌组的配方：不再是四种花色各两张同点数牌，而是两种花色各四张同点数牌。牌数仍是 104 张，只是每张黑桃和红桃出现的次数更多。",
        },
        {
          type: "p",
          text: "这就带来了这个模式的标志性问题：一列看起来像整齐的递减顺子，直到你发现两种花色交织在一起。单张牌可以落在点数大一位的牌上，不论花色；但**只有整组牌都属于同一花色时，整组才能一起移动**。双花色制造的不匹配刚刚好，足以惩罚粗心的叠牌。",
        },
        { type: "h2", id: "why-play", text: "为什么双花色是日常模式" },
        {
          type: "p",
          text: "单花色是教学，四花色是考试，双花色则是你午休时能玩的牌桌：既不会无聊到睡着，也不至于每局都输。它保留了让蜘蛛纸牌有趣的规划感，又留出足够的余地，让你从一步欠考虑的移动中恢复。",
        },
        {
          type: "p",
          text: "如果你正从[单花色](/spider-solitaire-1-suit)升级，前几局可能会觉得意外地别扭。规则没有变，变的是你“任何递减牌组都能移动”的习惯。前十个回合放慢节奏，拖动整组前先检查花色。",
        },
        { type: "h2", id: "rules", text: "一屏看懂双花色规则" },
        {
          type: "ul",
          items: [
            "**牌桌：** 54 张牌发成十列，其中四列各六张、六列各五张。每列只有最下方的一张牌初始面朝上。",
            "**搭建：** 按点数递减叠放，单张牌不限花色；多张牌组成的牌组必须是同花色的递减顺子。",
            "**空列：** 任何牌或合法的同花色顺子都可以移入空列。",
            "**发牌：** 点击牌堆，给每列各加一张面朝上的牌。每列都必须非空。共有五次发牌。",
            "**完成顺子：** 同一花色从 K 到 A 的完整顺子会自动清除。清掉八组即获胜。",
          ],
        },
        {
          type: "p",
          text: "包括移动顺子的一部分、发牌为何被阻止等边界情况在内的完整表述，见[规则指南](/spider-solitaire-rules)。",
        },
        { type: "h2", id: "strategy", text: "双花色下更重要的策略" },
        { type: "h3", text: "1. 代价不高时，尽量让花色分开" },
        {
          type: "p",
          text: "同花色顺子意味着未来的机动性，混合顺子则可能是一堆日后不得不拆开的牌。如果两种合法移动在点数推进上效果相同，选择能让同一花色保持在一起的那一种。这是双花色最有用的一条习惯。",
        },
        { type: "h3", text: "2. 不要过早消耗牌堆" },
        {
          type: "p",
          text: "每次发牌都会加入十张你无法选择的牌。点击牌堆之前，先完成所有能翻开暗牌或清空一列的牌桌移动。过早发牌会埋掉你即将解放的牌。",
        },
        { type: "h3", text: "3. 把空列当工具，而不是仓库" },
        {
          type: "p",
          text: "空列可以放一张 K、一段不完整的顺子，或在你整理另一列时暂存牌组。错误在于找到第一张 K 就填满所有空列。条件允许时，至少留一列空着。",
        },
        { type: "h3", text: "4. 移动整组前先数花色" },
        {
          type: "p",
          text: "拖动牌组之前，从上到下读一遍。如果点数递减但花色交替，只有最上面一张能单独移动。许多输掉的双花色对局，都始于一组乍看整齐的牌。",
        },
        { type: "h3", text: "5. 把撤销当作规划工具" },
        {
          type: "p",
          text: "撤销没有次数限制。在困难的牌桌上，可以先试一步、观察新局面，如果局势变差再撤回。这比盯着同一副牌看五分钟要快得多。",
        },
        { type: "h2", id: "common-mistakes", text: "双花色三个常见错误" },
        {
          type: "ol",
          items: [
            "**把 A 埋在混合牌堆下。** A 只有在完整的 K 到 A 顺子形成时才会清除。让低点数牌保持可达，而不是用方便的点数匹配把它们盖住。",
            "**在有空列时发牌。** 只要有一列没有牌，牌堆就无法使用。要有目的地补上空位，而不是随便丢一张牌进去只为解锁发牌。",
            "**只追一条长顺子。** 蜘蛛纸牌奖励的是八组完成的顺子，而不是一列漂亮的牌。把进展分散到整张牌桌，让多种花色同时推进。",
          ],
        },
        { type: "h2", id: "next", text: "接下来去哪里" },
        {
          type: "p",
          text: "如果双花色仍然节奏太快，退回[单花色](/spider-solitaire-1-suit)打几局，专注翻开牌面。如果你已经能稳定获胜，试试[四花色](/spider-solitaire-4-suits)，并做好胜率大幅下降的准备。[难度对比](/spider-solitaire-difficulty-levels)会用直观的数字解释这一跳跃。",
        },
      ],
    },

    ja: {
      metaTitle: "スパイダーソリティア 2スート – 無料オンラインプレイ",
      metaDescription:
        "ブラウザで無料の2スート版スパイダーソリティア。2スートのルール、混ざった山がゲームをどう変えるか、ランを進め続ける戦略を解説します。",
      title: "スパイダーソリティア 2スート",
      description:
        "2スートのスパイダーソリティアを無料でオンラインプレイ。2スートのルールと戦略、元に戻す・ヒント・ローカル統計付きのブラウザテーブル。",
      eyebrow: "2スートのテーブル",
      lead: "**スパイダーソリティア 2スート**はバランスの取れた中間難易度です。1スートの入門ゲームより手応えがあり、4スートのクラシックほど容赦ありません。このページではすぐに2スートのテーブルが始まり、以下のガイドでモードの仕組みを説明します。",
      playable: true,
      difficulty: 2,
      playHref: "/",
      playLabel: "2スートのテーブルで遊ぶ",
      breadcrumb: "2スート",
      game: {
        name: "スパイダーソリティア 2スート – SpiderDeck",
        description:
          "無料の2スート版スパイダーソリティア。元に戻す、ヒント、統計、タッチ操作に対応したブラウザテーブル。",
        suits: 2,
      },
      related: [
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "1・2・4スートの比較",
          description: "デッキ構成、難易度、勝率を比較します。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "攻略ガイド",
          description: "計画的なテーブルと偶然の勝利を分ける習慣。",
        },
        {
          href: "/spider-solitaire-1-suit",
          title: "1スートで遊ぶ",
          description: "ランと配布の仕組みを学ぶ、やさしいテーブル。",
        },
        {
          href: "/spider-solitaire-4-suits",
          title: "4スートで遊ぶ",
          description: "4スートすべてを使うクラシックな上級版。",
        },
      ],
      faq: [
        {
          q: "2スートのスパイダーソリティアとは？",
          a: "4スートではなく2スートで遊ぶ標準的なスパイダーソリティアです。104枚のデッキはスペードとハートだけで構成され、各ランクが各スートに4枚ずつあります。KからAまでのランを8組完成させる点は同じです。",
        },
        {
          q: "2スートは1スートより難しいですか？",
          a: "はい。1スートでは降順のランがすべて同スートのランになります。2スートでは混ざった山が現れるため、どのカードをまとめて動かせるか計画する必要があります。多くのプレイヤーは1スートより明確に難しく、4スートよりはずっと寛容だと感じています。",
        },
        {
          q: "2スートはここのデフォルトですか？",
          a: "はい。メインのテーブルは2スートで始まります。新しいゲームを始める前に設定で1スートまたは4スートに切り替えられるほか、専用の難易度ページを開くこともできます。",
        },
        {
          q: "2スートのゲームでは何枚のカードを使いますか？",
          a: "104枚すべてを使います。2組のデッキをスペードとハートだけに絞ったものです。54枚が場に配られ、残りの50枚は10枚ずつ5回の山札として配られます。",
        },
        {
          q: "ゲームの途中で難易度を変更できますか？",
          a: "いいえ。難易度はその配布ごとに固定です。別のモードを始めると新しいゲームになるため、結果を公平に比べたい場合は現在のテーブルを終えるか放棄してください。",
        },
        {
          q: "2スートの1ゲームはどのくらいかかりますか？",
          a: "丁寧に遊ぶと10〜30分ほどです。混ざったスートの山は確認が増えるため、初心者はもっと時間がかかることがあります。元に戻すを使って、確定せずに手順を試せます。",
        },
      ],
      blocks: [
        { type: "h2", id: "what-two-suits-means", text: "2スートで変わること" },
        {
          type: "p",
          text: "2スートのゲームも、他のスパイダーソリティアと同じ104枚、10列、8組の完成ラン、5回の配布を使います。違いはデッキの構成です。4スート各2枚ではなく、2スート各4枚になります。枚数は104枚のままですが、スペードとハートがより頻繁に現れます。",
        },
        {
          type: "p",
          text: "ここからこのモード特有の問題が生まれます。一見きれいな降順のランに見えても、2つのスートが織り交ざっている列があります。1枚のカードはスートを問わず1つ上のランクに置けますが、**グループはすべてのカードが同じスートのときだけまとめて動かせます**。2スートは、雑な積み方に罰を与えるのにちょうど十分な不一致を生みます。",
        },
        { type: "h2", id: "why-play", text: "2スートが日常的なモードである理由" },
        {
          type: "p",
          text: "1スートはチュートリアル、4スートはテストです。2スートは、昼休みに遊んでも眠くならず、毎回負けもしないテーブルです。スパイダーソリティアを面白くする計画性を保ちながら、疑問のある一手から立て直せる余裕も残します。",
        },
        {
          type: "p",
          text: "[1スート](/spider-solitaire-1-suit)からステップアップするなら、最初の数ゲームは意外にぎこちなく感じるはずです。ルールは変わっていません。変わったのは、降順のランはすべて動かせると考える習慣です。最初の10手はゆっくり進め、山をドラッグする前にスートを確認しましょう。",
        },
        { type: "h2", id: "rules", text: "1画面でわかる2スートのルール" },
        {
          type: "ul",
          items: [
            "**場：** 54枚を10列に配ります。6枚の列が4つ、5枚の列が6つです。各列で最初に表向きなのは一番下の1枚だけです。",
            "**積む：** ランクは降順で、1枚ならスートは問いません。複数枚のグループは同スートの降順ランである必要があります。",
            "**空列：** どのカードも、合法な同スートのランも空列に移動できます。",
            "**配布：** 山札をクリックすると各列に表向きのカードが1枚ずつ加わります。すべての列にカードが必要です。配布は5回です。",
            "**ランの完成：** 同スートでKからAまでのランができると自動的に消えます。8組を完成させれば勝利です。",
          ],
        },
        {
          type: "p",
          text: "ランの一部を動かす場合や配布が止められる理由などの例外を含む正式な説明は、[ルールガイド](/spider-solitaire-rules)にあります。",
        },
        { type: "h2", id: "strategy", text: "2スートでより重要になる戦略" },
        { type: "h3", text: "1. コストが低いときはスートを分けておく" },
        {
          type: "p",
          text: "同スートのランは将来の機動力です。混ざったランは、後で分解しなければならないかもしれません。2つの合法手が同じランク進行をもたらすなら、1つのスートをまとめて保つ方を選びましょう。これが2スートで最も役立つ習慣です。",
        },
        { type: "h3", text: "2. 山札を早く使わない" },
        {
          type: "p",
          text: "配布のたびに、自分で選べない10枚が加わります。山札をクリックする前に、裏向きのカードを表にする、または列を空にする場の移動をすべて済ませましょう。早すぎる配布は、これから解放するはずのカードを埋めてしまいます。",
        },
        { type: "h3", text: "3. 空列は収納ではなく道具として使う" },
        {
          type: "p",
          text: "空列にはKを置いたり、途中のランや一時的な山を置いたりできます。よくある失敗は、見つけた最初のKで空列をすべて埋めてしまうことです。可能なら1列は空けておきましょう。",
        },
        { type: "h3", text: "4. グループを動かす前にスートを数える" },
        {
          type: "p",
          text: "山をドラッグする前に、上から下まで読みましょう。ランクは下がっていてもスートが交互なら、動かせるのは一番上の1枚だけです。負ける2スートのゲームの多くは、一見そろって見えたグループから始まります。",
        },
        { type: "h3", text: "5. 元に戻すを計画の道具にする" },
        {
          type: "p",
          text: "元に戻すは無制限です。難しいテーブルでは、一手試して新しい配置を見て、悪くなったら戻しましょう。同じ盤面を5分眺めるより速い方法です。",
        },
        { type: "h2", id: "common-mistakes", text: "2スートでよくある3つのミス" },
        {
          type: "ol",
          items: [
            "**Aを混ざった山の下に埋める。** AはKからAまでの完全なランができたときだけ消えます。都合のよいランク合わせで低いカードを覆わず、届く状態に保ちましょう。",
            "**空列があるのに配布する。** すべての列にカードがないと山札は使えません。配布を解放するためだけに適当なカードを置くのではなく、意図をもって空きを埋めましょう。",
            "**1本の長いランだけを追う。** スパイダーソリティアが評価するのは8組の完成ランであり、美しい1列ではありません。進み具合をテーブル全体に分散し、複数のスートを動かし続けましょう。",
          ],
        },
        { type: "h2", id: "next", text: "次に進むなら" },
        {
          type: "p",
          text: "2スートがまだ速く感じるなら、[1スート](/spider-solitaire-1-suit)に下げて数ゲーム遊び、カードを表にすることに集中しましょう。安定して勝てるなら[4スート](/spider-solitaire-4-suits)に挑戦してください。勝率は大きく下がるはずです。[難易度比較](/spider-solitaire-difficulty-levels)がその差をわかりやすい数字で説明します。",
        },
      ],
    },
  },
};
