import type { PageDefinition } from "../types";

export const fourSuitsPage: PageDefinition = {
  slug: "spider-solitaire-4-suits",
  contents: {
    en: {
      metaTitle: "Spider Solitaire 4 Suits – Play Free Expert Game",
      metaDescription:
        "Play Spider Solitaire 4 suits free online. The expert table with all four suits, plus strategy for mixed stacks, empty columns, and limited deals.",
      title: "Spider Solitaire 4 Suits",
      description:
        "Play expert Spider Solitaire with four suits. Learn how the classic table differs from 2 suits and how to manage mixed stacks and limited deals.",
      eyebrow: "Expert table",
      lead: "**Spider Solitaire 4 suits** is the classic expert game: two full decks across spades, hearts, diamonds, and clubs. Every rank appears only twice per suit, and mixed-suit stacks are the norm. This page deals a four-suit table immediately; the guide below explains what changes and how to survive it.",
      playable: true,
      difficulty: 4,
      playHref: "#article-body",
      playLabel: "Read the expert guide",
      breadcrumb: "4 Suits",
      game: {
        name: "Spider Solitaire 4 Suits",
        description:
          "Free classic four-suit Spider Solitaire with undo, hints, statistics, and a responsive browser table.",
        suits: 4,
      },
      related: [
        {
          href: "/spider-solitaire-2-suits",
          title: "Play 2 Suits",
          description:
            "The recommended stepping stone before the four-suit classic.",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "Strategy Guide",
          description:
            "Core habits for exposing cards and protecting empty columns.",
        },
        {
          href: "/spider-solitaire-rules",
          title: "Rules Reference",
          description: "Every move, deal, and completion rule in one place.",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "Compare Difficulties",
          description: "See how deck composition changes the challenge.",
        },
      ],
      faq: [
        {
          q: "What is 4-suit Spider Solitaire?",
          a: "It is the classic expert version: 104 cards using all four suits, with two copies of every rank in each suit. You still build eight King-to-Ace same-suit runs, but mixed stacks are everywhere.",
        },
        {
          q: "Why is 4 suits so much harder than 2 suits?",
          a: "More suits means fewer copies of each rank per suit and more mixed-suit stacks. A descending column that looks movable may contain several suits, so groups break apart. Good 4-suit play depends on suit discipline and empty-column management.",
        },
        {
          q: "What is a good win rate in 4-suit Spider?",
          a: "Experienced players often win a minority of random deals. Do not judge progress by a single game. Track whether you are exposing more cards and making fewer forced deals, then compare over ten or twenty games.",
        },
        {
          q: "Should I start with 4 suits?",
          a: "Usually no. Start with 1 suit to learn the mechanics, then 2 suits for the everyday challenge. Move to 4 suits when you are comfortable reading same-suit runs and planning several moves ahead.",
        },
        {
          q: "Can I undo in a 4-suit game?",
          a: "Yes. Undo is unlimited here. It is especially useful in expert games because a single mixed-stack mistake can take many moves to repair.",
        },
      ],
      blocks: [
        { type: "h2", id: "what-changes", text: "What makes 4 suits the expert mode" },
        {
          type: "p",
          text: "The board is the same size, the rules are identical, and the goal is still eight King-to-Ace runs. The difference is the deck. Four suits means two copies of each rank per suit, so every rank is spread across the table. A column that descends neatly may contain four different suits, which means its cards cannot move as a group.",
        },
        {
          type: "p",
          text: "This is why 4-suit games feel less like building runs and more like dismantling mixed stacks. You spend more moves separating suits and fewer moves making obvious progress. A single careless placement can bury a card you need for several dozen moves.",
        },
        { type: "h2", id: "deck", text: "Deck composition" },
        {
          type: "table",
          head: ["Mode", "Suits in play", "Copies per rank per suit", "Typical feel"],
          rows: [
            ["1 suit", "Spades", "8", "Teaching table; groups are easy to move"],
            ["2 suits", "Spades, hearts", "4", "Balanced; mixed stacks appear but can be untangled"],
            ["4 suits", "Spades, hearts, diamonds, clubs", "2", "Expert; suit separation is the main job"],
          ],
        },
        { type: "h2", id: "strategy", text: "How to play 4-suit Spider better" },
        { type: "h3", text: "Protect same-suit sequences above all" },
        {
          type: "p",
          text: "A same-suit run is the only thing that moves as a unit. When you have a choice between a convenient rank match and a move that preserves a same-suit sequence, protect the sequence. In four-suit games, mobility is the scarce resource.",
        },
        { type: "h3", text: "Empty columns are worth more than Kings" },
        {
          type: "p",
          text: "In lower difficulties, an empty column often becomes a parking spot for the first King. In four suits, an empty column is a working tool. Keep at least one free when possible, especially before a stock deal that will lengthen every column.",
        },
        { type: "h3", text: "Plan the stock in blocks" },
        {
          type: "p",
          text: "Five deals remain. Each one adds ten cards and can bury a promising sequence. Count how many deals you have left and treat the last two as a deadline: the table should be mostly suit-separated before you reach them.",
        },
        { type: "h3", text: "Do not force every game to a win" },
        {
          type: "p",
          text: "Random four-suit deals are sometimes unwinnable. Recognizing a dead table early and starting fresh is a skill. Use undo to test alternatives, but do not spend twenty minutes rescuing a position that has no path to eight runs.",
        },
        { type: "h3", text: "Use hints as a second opinion" },
        {
          type: "p",
          text: "The hint button highlights a legal move, not necessarily the best one. On an expert table, use it when you are genuinely stuck or to check whether a group can move. Then evaluate the suggestion against your own plan.",
        },
        { type: "h2", id: "mistakes", text: "Expert-level mistakes to avoid" },
        {
          type: "ul",
          items: [
            "**Treating a descending mixed stack as a group.** Read the suits before dragging. Only same-suit runs move together.",
            "**Dealing to unlock a column.** Filling the empty column with an arbitrary card just to enable the stock often makes the board worse. Fill it with a card that belongs in your plan.",
            "**Ignoring buried low cards.** Aces and twos that cannot be reached prevent runs from completing. Expose them early when the cost is manageable.",
            "**Hoarding undos.** Undo is free. Experimenting is a legitimate way to read a difficult position.",
          ],
        },
        { type: "h2", id: "next", text: "A sane difficulty path" },
        {
          type: "p",
          text: "If you arrived here first, treat this table as a benchmark rather than a starting point. Play [1 suit](/spider-solitaire-1-suit) until the mechanics are automatic, then [2 suits](/spider-solitaire-2-suits) until mixed stacks no longer surprise you. The [difficulty comparison](/spider-solitaire-difficulty-levels) shows exactly how the deck changes at each step.",
        },
      ],
    },

    zh: {
      metaTitle: "蜘蛛纸牌四花色 – 免费高手版游戏",
      metaDescription:
        "免费在线玩蜘蛛纸牌四花色。四种花色全部上场的专家牌桌，附混合牌堆、空列和有限发牌次数的策略。",
      title: "蜘蛛纸牌四花色",
      description:
        "玩四花色高手版蜘蛛纸牌。了解经典牌桌与双花色的区别，以及如何应对混合牌堆和有限的发牌次数。",
      eyebrow: "高手牌桌",
      lead: "**蜘蛛纸牌四花色**是经典的专家游戏：两副完整的牌，涵盖黑桃、红桃、方块和梅花。每个点数在每种花色中只出现两次，混合花色的牌堆是常态。本页会立即发好一副四花色牌桌；下面的指南将说明有哪些变化，以及如何应对。",
      playable: true,
      difficulty: 4,
      playHref: "#article-body",
      playLabel: "阅读高手指南",
      breadcrumb: "四花色",
      game: {
        name: "蜘蛛纸牌四花色 – SpiderDeck",
        description:
          "免费的经典四花色蜘蛛纸牌，支持撤销、提示、统计和自适应浏览器牌桌。",
        suits: 4,
      },
      related: [
        {
          href: "/spider-solitaire-2-suits",
          title: "玩双花色",
          description: "迈向四花色经典之前，推荐的过渡台阶。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "策略指南",
          description: "翻开牌面、保护空列的核心习惯。",
        },
        {
          href: "/spider-solitaire-rules",
          title: "规则速查",
          description: "每一步移动、发牌和完成规则，一页看懂。",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "难度对比",
          description: "看看牌组构成如何改变挑战。",
        },
      ],
      faq: [
        {
          q: "四花色蜘蛛纸牌是什么？",
          a: "这是经典的专家版本：104 张牌使用全部四种花色，每个点数在每种花色中有两张。你仍然要完成八组同花色、从 K 到 A 的顺子，但混合牌堆随处可见。",
        },
        {
          q: "为什么四花色比双花色难这么多？",
          a: "花色越多，每个点数在每种花色中的张数越少，混合花色的牌堆也越多。一列看似可以移动的递减牌，可能包含好几种花色，导致牌组被拆开。四花色打得好不好，取决于花色纪律和空列管理。",
        },
        {
          q: "四花色蜘蛛纸牌的合理胜率是多少？",
          a: "经验丰富的玩家通常只能赢下少数随机牌局。不要用一局来评判进步。看自己是否翻开了更多牌、被迫发牌的次数是否减少，再用十局或二十局来比较。",
        },
        {
          q: "应该从四花色开始吗？",
          a: "通常不建议。先从单花色学习机制，再用双花色体验日常挑战。当你能从容辨认同花色顺子并提前规划几步时，再进入四花色。",
        },
        {
          q: "四花色对局中可以撤销吗？",
          a: "可以。这里的撤销没有次数限制。在高手对局中尤其有用，因为一次混合牌堆的失误，可能要很多步才能弥补。",
        },
      ],
      blocks: [
        { type: "h2", id: "what-changes", text: "四花色为何是专家模式" },
        {
          type: "p",
          text: "牌桌大小相同，规则完全一致，目标仍是八组从 K 到 A 的顺子。区别在于牌组：四种花色意味着每个点数在每种花色中只有两张，因此每个点数都分散在整张牌桌上。一列整齐递减的牌，可能包含四种不同花色，这意味着这些牌无法整组移动。",
        },
        {
          type: "p",
          text: "所以四花色对局不太像在搭建顺子，更像在拆解混合牌堆。你会花更多步数分离花色，更少步数取得明显进展。一次随意的放置，可能把你几十步后需要的牌埋住。",
        },
        { type: "h2", id: "deck", text: "牌组构成" },
        {
          type: "table",
          head: ["模式", "使用花色", "每种花色每点数张数", "典型体验"],
          rows: [
            ["单花色", "黑桃", "8", "教学牌桌；整组移动容易"],
            ["双花色", "黑桃、红桃", "4", "平衡；混合牌堆会出现，但可以理清"],
            ["四花色", "黑桃、红桃、方块、梅花", "2", "高手；分离花色是主要任务"],
          ],
        },
        { type: "h2", id: "strategy", text: "如何打好四花色蜘蛛纸牌" },
        { type: "h3", text: "优先保护同花色序列" },
        {
          type: "p",
          text: "同花色顺子是唯一能作为一个整体移动的东西。当你在方便的点数匹配和保护同花色序列之间做选择时，保护序列。在四花色对局中，机动性才是稀缺资源。",
        },
        { type: "h3", text: "空列比 K 更值钱" },
        {
          type: "p",
          text: "在较低难度中，空列常常变成第一张 K 的停车场。在四花色中，空列是工作台。条件允许时至少留一列空着，尤其是在一次会让每列变长的发牌之前。",
        },
        { type: "h3", text: "分段规划牌堆" },
        {
          type: "p",
          text: "只剩五次发牌。每次都会加入十张牌，可能埋掉一段有前途的序列。数清还剩几次发牌，把最后两次当作截止线：在用到它们之前，牌桌应该基本完成花色分离。",
        },
        { type: "h3", text: "不必强求每局都赢" },
        {
          type: "p",
          text: "随机的四花色牌局有时无解。早早认出死局并重新开始，也是一种技能。可以用撤销测试其他选择，但不要花二十分钟抢救一个根本没有八组顺子路径的局面。",
        },
        { type: "h3", text: "把提示当作第二意见" },
        {
          type: "p",
          text: "提示按钮会高亮一步合法移动，但不一定是最佳移动。在高手牌桌上，真正卡住时再用它，或用来确认一组牌能否移动。然后结合自己的计划评估这个建议。",
        },
        { type: "h2", id: "mistakes", text: "高手也要避免的错误" },
        {
          type: "ul",
          items: [
            "**把递减的混合牌堆当成整组。** 拖动前先读花色。只有同花色顺子才能一起移动。",
            "**为了解锁一列而发牌。** 只为启用牌堆就随便拿一张牌填满空列，往往会让牌局更糟。要用符合你计划的牌来填。",
            "**忽视被埋住的低点数牌。** 够不到的 A 和 2 会阻止顺子完成。代价可控时，尽早把它们翻出来。",
            "**舍不得用撤销。** 撤销是免费的。试验是读懂困难局面的一种正当方式。",
          ],
        },
        { type: "h2", id: "next", text: "一条合理的难度进阶路线" },
        {
          type: "p",
          text: "如果你是先来到这里，请把这张牌桌当作基准，而不是起点。先玩[单花色](/spider-solitaire-1-suit)，直到机制变成下意识；再玩[双花色](/spider-solitaire-2-suits)，直到混合牌堆不再让你意外。[难度对比](/spider-solitaire-difficulty-levels)会清楚展示每一步牌组如何变化。",
        },
      ],
    },

    ja: {
      metaTitle: "スパイダーソリティア 4スート – 無料上級ゲーム",
      metaDescription:
        "無料でオンラインプレイできる4スート版スパイダーソリティア。4スートすべてを使う上級テーブルと、混ざった山、空列、限られた配布の戦略。",
      title: "スパイダーソリティア 4スート",
      description:
        "4スートで遊ぶ上級スパイダーソリティア。クラシックなテーブルが2スートとどう違うか、混ざった山と限られた配布をどう扱うかを学べます。",
      eyebrow: "上級テーブル",
      lead: "**スパイダーソリティア 4スート**はクラシックな上級ゲームです。スペード、ハート、ダイヤ、クラブの4スートを2組のデッキで使います。各ランクは各スートに2枚しかなく、混ざった山が当たり前です。このページではすぐに4スートのテーブルが配られ、以下のガイドで何が変わるか、どう生き残るかを説明します。",
      playable: true,
      difficulty: 4,
      playHref: "#article-body",
      playLabel: "上級ガイドを読む",
      breadcrumb: "4スート",
      game: {
        name: "スパイダーソリティア 4スート – SpiderDeck",
        description:
          "無料のクラシックな4スート版スパイダーソリティア。元に戻す、ヒント、統計、レスポンシブなブラウザテーブル付き。",
        suits: 4,
      },
      related: [
        {
          href: "/spider-solitaire-2-suits",
          title: "2スートで遊ぶ",
          description: "4スートのクラシックに進む前の推奨ステップ。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "攻略ガイド",
          description: "カードを表にし、空列を守るための基本習慣。",
        },
        {
          href: "/spider-solitaire-rules",
          title: "ルール早見表",
          description: "移動、配布、完成のルールを一か所に。",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "難易度を比較",
          description: "デッキ構成が難しさをどう変えるか。",
        },
      ],
      faq: [
        {
          q: "4スートのスパイダーソリティアとは？",
          a: "クラシックな上級版です。104枚を4スートすべてで使い、各ランクが各スートに2枚ずつあります。KからAまでの同スートのランを8組つくる点は同じですが、混ざった山がどこにでもあります。",
        },
        {
          q: "4スートはなぜ2スートよりずっと難しいのですか？",
          a: "スートが増えると、各スートの各ランクの枚数が減り、混ざったスートの山が増えます。動かせそうに見える降順の列にも複数のスートが含まれ、グループが分かれてしまいます。4スートで勝つには、スートの規律と空列の管理が重要です。",
        },
        {
          q: "4スートで良い勝率はどのくらいですか？",
          a: "経験豊富なプレイヤーでも、ランダムな配布の少数しか勝てないことがよくあります。1ゲームだけで進歩を判断しないでください。より多くのカードを表にできているか、やむを得ない配布が減っているかを見て、10〜20ゲームで比較しましょう。",
        },
        {
          q: "4スートから始めるべきですか？",
          a: "通常はおすすめしません。1スートで仕組みを学び、2スートで日常的な挑戦を楽しんでください。同スートのランを読み、数手先を計画できるようになってから4スートに進みましょう。",
        },
        {
          q: "4スートのゲームでも元に戻せますか？",
          a: "はい。ここでは元に戻すは無制限です。混ざった山での1つのミスを直すのに多くの手数がかかるため、上級ゲームでは特に役立ちます。",
        },
      ],
      blocks: [
        { type: "h2", id: "what-changes", text: "4スートが上級モードである理由" },
        {
          type: "p",
          text: "盤面の大きさは同じで、ルールも同一、目標もKからAまでの8組のランです。違いはデッキです。4スートでは各ランクが各スートに2枚しかないため、すべてのランクがテーブル全体に散らばります。きれいに降順に見える列にも4つのスートが混ざることがあり、そのカードたちはグループとして動かせません。",
        },
        {
          type: "p",
          text: "だから4スートのゲームは、ランを積むというより混ざった山を解体する感覚になります。スートを分けるのに多くの手を使い、明らかな進展に使う手は少なくなります。1回の不注意な配置が、数十手後に必要なカードを埋めてしまうこともあります。",
        },
        { type: "h2", id: "deck", text: "デッキ構成" },
        {
          type: "table",
          head: ["モード", "使用スート", "各スートの各ランク枚数", "典型的な感触"],
          rows: [
            ["1スート", "スペード", "8", "入門テーブル。グループを動かしやすい"],
            ["2スート", "スペード、ハート", "4", "バランス型。混ざった山は出るがほどける"],
            ["4スート", "スペード、ハート、ダイヤ、クラブ", "2", "上級。スートの分離が主な仕事"],
          ],
        },
        { type: "h2", id: "strategy", text: "4スートのスパイダーソリティアをうまく遊ぶには" },
        { type: "h3", text: "同スートのシーケンスを最優先で守る" },
        {
          type: "p",
          text: "同スートのランだけが1つの単位として動きます。都合のよいランク合わせと同スートのシーケンスを保つ手のどちらかを選ぶなら、シーケンスを守りましょう。4スートでは機動力が貴重な資源です。",
        },
        { type: "h3", text: "空列はKより価値がある" },
        {
          type: "p",
          text: "低い難易度では、空列は最初のKの駐車場になりがちです。4スートでは空列は作業道具です。可能なら少なくとも1列は空けておき、特にすべての列が長くなる配布の前には空きを確保しましょう。",
        },
        { type: "h3", text: "山札はまとまりで計画する" },
        {
          type: "p",
          text: "配布は残り5回です。1回ごとに10枚が加わり、有望なシーケンスを埋めることがあります。残りの配布回数を数え、最後の2回を締め切りとして扱いましょう。そこに到達する前に、テーブルはおおむねスートごとに分かれているべきです。",
        },
        { type: "h3", text: "すべてのゲームを勝ちに導こうとしない" },
        {
          type: "p",
          text: "ランダムな4スートの配布は、勝てないこともあります。死んだ盤面を早く見抜いて新しく始めるのもスキルです。元に戻すで別案を試すのはよいですが、8組のランへの道がない局面を20分かけて救うのはやめましょう。",
        },
        { type: "h3", text: "ヒントを第二の意見として使う" },
        {
          type: "p",
          text: "ヒントボタンは合法手を強調するだけで、最善手とは限りません。上級テーブルでは、本当に行き詰まったときや、グループが動くか確認したいときに使い、提案を自分の計画と照らし合わせて評価しましょう。",
        },
        { type: "h2", id: "mistakes", text: "上級者が避けるべきミス" },
        {
          type: "ul",
          items: [
            "**降順の混ざった山をグループとして扱う。** ドラッグする前にスートを読みましょう。まとめて動くのは同スートのランだけです。",
            "**列を空けるために配る。** 山札を使うためだけに空列へ適当なカードを置くと、盤面が悪くなることがよくあります。計画に合うカードで埋めましょう。",
            "**埋もれた低いカードを無視する。** 届かないAや2はランの完成を妨げます。コストが許すうちに早めに表にしましょう。",
            "**元に戻すを温存する。** 元に戻すは無料です。試してみることは、難しい局面を読む正当な方法です。",
          ],
        },
        { type: "h2", id: "next", text: "無理のない難易度の進め方" },
        {
          type: "p",
          text: "最初にここへ来たなら、このテーブルは出発点ではなく基準と考えてください。仕組みが自然になるまで[1スート](/spider-solitaire-1-suit)を遊び、混ざった山に驚かなくなるまで[2スート](/spider-solitaire-2-suits)を遊びましょう。[難易度比較](/spider-solitaire-difficulty-levels)で、各段階のデッキの変化が正確にわかります。",
        },
      ],
    },
  },
};
