import type { PageDefinition } from "../types";

export const difficultyLevelsPage: PageDefinition = {
  slug: "spider-solitaire-difficulty-levels",
  contents: {
    en: {
      metaTitle: "Spider Solitaire 1 vs 2 vs 4 Suits – Which Difficulty?",
      metaDescription:
        "Compare Spider Solitaire difficulty levels. See how the deck changes from 1 to 2 to 4 suits, which mode is easiest, and when to move up.",
      title: "Spider Solitaire 1 vs 2 vs 4 Suits",
      description:
        "Compare 1-suit, 2-suit, and 4-suit Spider Solitaire: deck composition, difficulty, recommended experience, and how to progress.",
      eyebrow: "Difficulty guide",
      lead: "All three Spider Solitaire modes use the same 104 cards, the same ten columns, and the same win condition. The only difference is how many suits are mixed into the deck — and that single change decides how hard the game feels.",
      playHref: "/",
      playLabel: "Try the default table",
      breadcrumb: "1 vs 2 vs 4 Suits",
      related: [
        {
          href: "/spider-solitaire-1-suit",
          title: "Play 1 Suit",
          description: "The beginner table with a single suit.",
        },
        {
          href: "/spider-solitaire-2-suits",
          title: "Play 2 Suits",
          description: "The recommended everyday mode.",
        },
        {
          href: "/spider-solitaire-4-suits",
          title: "Play 4 Suits",
          description: "The classic expert challenge.",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "Strategy Guide",
          description: "Habits that apply across every difficulty.",
        },
      ],
      faq: [
        {
          q: "Which Spider Solitaire difficulty is easiest?",
          a: "One suit is the easiest. Every card is a spade, so any descending run moves as a group. Two suits is the middle difficulty, and four suits is the expert version.",
        },
        {
          q: "Why does adding suits make the game harder?",
          a: "More suits means fewer copies of each rank per suit and more mixed-suit stacks. Groups break apart, so you cannot move a descending column just because the ranks line up. You have to preserve same-suit sequences.",
        },
        {
          q: "What is the best difficulty for most players?",
          a: "Two suits. It is challenging enough to require planning but forgiving enough for a short session. Many players treat it as the default Spider Solitaire experience.",
        },
        {
          q: "Are all 4-suit deals winnable?",
          a: "No. Random four-suit deals can produce positions with no path to eight runs. Experienced players accept that some games are losses and focus on the quality of their decisions.",
        },
        {
          q: "Does the number of cards change between difficulties?",
          a: "No. Every mode uses 104 cards, ten tableau columns, and five stock deals. Only the suit distribution changes.",
        },
      ],
      blocks: [
        { type: "h2", id: "comparison", text: "The short comparison" },
        {
          type: "table",
          head: ["Mode", "Deck", "Copies per rank per suit", "Group moves", "Best for"],
          rows: [
            ["1 suit", "104 spades", "8", "Every descending run", "First games and mechanics practice"],
            ["2 suits", "Spades and hearts", "4", "Same-suit runs only", "The everyday challenge"],
            ["4 suits", "All four suits", "2", "Same-suit runs only", "Experienced players who like low win rates"],
          ],
        },
        { type: "h2", id: "one-suit", text: "1 suit: the teaching table" },
        {
          type: "p",
          text: "One-suit Spider is the right place to learn. Because every card is a spade, any descending sequence can move as a group. You do not need to inspect suits, so attention goes to the two skills that matter in every mode: exposing face-down cards and creating empty columns.",
        },
        {
          type: "p",
          text: "It is still a real game. The stock is limited to five deals, and careless placements can bury Aces. But the lower reading burden means you can finish games and build pattern recognition quickly.",
        },
        { type: "h2", id: "two-suits", text: "2 suits: the recommended middle" },
        {
          type: "p",
          text: "Two suits is the mode most players settle on. The deck has four copies of each rank in each suit, so mixed stacks appear often enough to require planning without making the table chaotic. You can usually recover from a mediocre move, which makes it a good place to practise strategy.",
        },
        {
          type: "p",
          text: "The jump from 1 to 2 suits is mostly a reading change. You must check suits before moving a group, and you have to decide when to break a mixed stack to preserve a same-suit run. The rank rules and dealing rules do not change.",
        },
        { type: "h2", id: "four-suits", text: "4 suits: the classic expert mode" },
        {
          type: "p",
          text: "Four suits is the version many people mean by “Spider Solitaire”. It uses two copies of each rank per suit, so ranks are spread across four suits and mixed stacks dominate. Same-suit runs are harder to build and more valuable to protect. Empty columns become critical working space rather than storage.",
        },
        {
          type: "p",
          text: "Expect a lower win rate. Random deals can be unwinnable, and a single bad placement can take dozens of moves to repair. This is the mode for players who enjoy the process more than the trophy.",
        },
        { type: "h2", id: "progression", text: "A progression that works" },
        {
          type: "ol",
          items: [
            "**Play 1 suit until the rules are automatic.** You should be able to explain why a deal is blocked and how a group moves without checking the guide.",
            "**Play 2 suits for a week.** Focus on preserving same-suit runs rather than just making legal moves. Use undo to compare choices.",
            "**Try 4 suits when you want a test.** Do not use win rate as the only measure. Count how often you expose cards early and keep an empty column available.",
          ],
        },
        { type: "h2", id: "which-mode", text: "Which mode should you play right now?" },
        {
          type: "ul",
          items: [
            "**Never played Spider before:** start with [1 suit](/spider-solitaire-1-suit).",
            "**Know the rules and want a balanced session:** play [2 suits](/spider-solitaire-2-suits).",
            "**You have won 2-suit games and want the classic challenge:** play [4 suits](/spider-solitaire-4-suits).",
          ],
        },
        {
          type: "note",
          text: "**Note:** the suit count does not change the 54-card opening deal, the five stock deals, or the eight-run win condition. If a guide describes different numbers, it is describing a different variant or a house rule.",
        },
      ],
    },

    zh: {
      metaTitle: "蜘蛛纸牌单花色、双花色、四花色对比 – 该选哪个难度？",
      metaDescription:
        "对比蜘蛛纸牌的各个难度。了解从单花色到双花色、四花色时牌组如何变化，哪个模式最简单，以及何时该进阶。",
      title: "蜘蛛纸牌单花色、双花色与四花色对比",
      description:
        "对比单花色、双花色和四花色蜘蛛纸牌：牌组构成、难度、适合的人群，以及如何逐步进阶。",
      eyebrow: "难度指南",
      lead: "蜘蛛纸牌的三种模式都使用同样的 104 张牌、同样的十列和同样的获胜条件。唯一区别是牌组中混入多少种花色——而正是这一点决定了游戏有多难。",
      playHref: "/",
      playLabel: "试试默认牌桌",
      breadcrumb: "单花色、双花色与四花色",
      related: [
        {
          href: "/spider-solitaire-1-suit",
          title: "玩单花色",
          description: "只有一种花色的入门牌桌。",
        },
        {
          href: "/spider-solitaire-2-suits",
          title: "玩双花色",
          description: "推荐的日常模式。",
        },
        {
          href: "/spider-solitaire-4-suits",
          title: "玩四花色",
          description: "经典的专家挑战。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "策略指南",
          description: "适用于所有难度的习惯。",
        },
      ],
      faq: [
        {
          q: "哪个蜘蛛纸牌难度最简单？",
          a: "单花色最简单。所有牌都是黑桃，因此任何递减牌组都能整组移动。双花色是中等难度，四花色则是专家版本。",
        },
        {
          q: "为什么增加花色会让游戏更难？",
          a: "花色越多，每个点数在每种花色中的张数越少，混合花色的牌堆也越多。牌组会被拆开，所以不能只因为点数连续就移动一整列递减牌。你必须保护同花色序列。",
        },
        {
          q: "对多数玩家来说哪个难度最好？",
          a: "双花色。它既有足够挑战、需要规划，又足够宽容，适合短时间游玩。许多玩家把它视为蜘蛛纸牌的默认体验。",
        },
        {
          q: "四花色的牌局都有解吗？",
          a: "不是。随机的四花色发牌可能产生没有八组顺子路径的局面。经验丰富的玩家接受有些对局注定会输，并把注意力放在决策质量上。",
        },
        {
          q: "不同难度之间牌数会变吗？",
          a: "不会。每种模式都使用 104 张牌、十个牌桌列和五次牌堆发牌。只有花色分布会变。",
        },
      ],
      blocks: [
        { type: "h2", id: "comparison", text: "简要对比" },
        {
          type: "table",
          head: ["模式", "牌组", "每种花色每点数张数", "整组移动", "适合人群"],
          rows: [
            ["单花色", "104 张黑桃", "8", "所有递减牌组", "初次游玩和练习机制"],
            ["双花色", "黑桃和红桃", "4", "仅同花色顺子", "日常挑战"],
            ["四花色", "全部四种花色", "2", "仅同花色顺子", "喜欢低胜率的老手"],
          ],
        },
        { type: "h2", id: "one-suit", text: "单花色：教学牌桌" },
        {
          type: "p",
          text: "单花色蜘蛛纸牌是学习的好地方。因为所有牌都是黑桃，任何递减序列都能整组移动。你不需要检查花色，可以把注意力放在每种模式都重要的两个技能上：翻开背面朝上的牌，以及创造空列。",
        },
        {
          type: "p",
          text: "它仍然是一局真正的游戏。牌堆只有五次发牌，粗心的放置会把 A 埋住。但更低的读牌负担意味着你能较快完成对局并建立牌型识别。",
        },
        { type: "h2", id: "two-suits", text: "双花色：推荐的中庸之选" },
        {
          type: "p",
          text: "双花色是多数玩家最终会选择的模式。牌组中每个点数在每种花色中有四张，混合牌堆出现得足够频繁，需要规划，却不至于让牌桌失控。你通常能从一步平庸的移动中恢复，因此这里很适合练习策略。",
        },
        {
          type: "p",
          text: "从单花色到双花色，主要变化在“读牌”。移动整组前必须检查花色，还要决定何时拆开混合牌堆以保护同花色顺子。点数规则和发牌规则都没有改变。",
        },
        { type: "h2", id: "four-suits", text: "四花色：经典专家模式" },
        {
          type: "p",
          text: "四花色就是许多人说“蜘蛛纸牌”时所指的版本。它使用每个点数在每种花色中各两张，点数分散在四种花色中，混合牌堆占主导。同花色顺子更难搭建，也更值得保护。空列从仓库变成了关键的工作空间。",
        },
        {
          type: "p",
          text: "要做好胜率更低的准备。随机发牌可能无解，一次糟糕的放置可能要几十步才能弥补。这个模式适合更享受过程、而不是只想要奖杯的玩家。",
        },
        { type: "h2", id: "progression", text: "一套行之有效的进阶路径" },
        {
          type: "ol",
          items: [
            "**玩单花色，直到规则变成下意识。** 你应该无需翻指南，就能解释发牌为何被阻止、整组牌如何移动。",
            "**用双花色玩一周。** 重点不是走合法步，而是保护同花色顺子。用撤销比较不同选择。",
            "**想接受考验时再试四花色。** 不要只看胜率。数一数自己有多少次早早翻开牌面，并让空列保持可用。",
          ],
        },
        { type: "h2", id: "which-mode", text: "现在该玩哪个模式？" },
        {
          type: "ul",
          items: [
            "**从没玩过蜘蛛纸牌：** 从[单花色](/spider-solitaire-1-suit)开始。",
            "**懂规则，想要一局平衡的游戏：** 玩[双花色](/spider-solitaire-2-suits)。",
            "**已经赢过双花色，想要经典挑战：** 玩[四花色](/spider-solitaire-4-suits)。",
          ],
        },
        {
          type: "note",
          text: "**注意：** 花色数量不会改变 54 张牌的开局发牌、五次牌堆发牌，也不会改变完成八组顺子的获胜条件。如果某份指南描述了不同的数字，那它说的是另一种变体或自定规则。",
        },
      ],
    },

    ja: {
      metaTitle: "スパイダーソリティア 1・2・4スート比較 – どの難易度を選ぶ？",
      metaDescription:
        "スパイダーソリティアの難易度を比較。1・2・4スートでデッキがどう変わるか、どのモードが最も簡単か、いつ進むべきかを解説します。",
      title: "スパイダーソリティア 1・2・4スート比較",
      description:
        "1スート、2スート、4スートのスパイダーソリティアを比較。デッキ構成、難易度、おすすめの経験、進め方を解説します。",
      eyebrow: "難易度ガイド",
      lead: "スパイダーソリティアの3つのモードは、すべて同じ104枚、同じ10列、同じ勝利条件を使います。唯一の違いはデッキに何スートを混ぜるかです。そしてその1点が、ゲームの難しさを決めます。",
      playHref: "/",
      playLabel: "デフォルトのテーブルを試す",
      breadcrumb: "1・2・4スート比較",
      related: [
        {
          href: "/spider-solitaire-1-suit",
          title: "1スートで遊ぶ",
          description: "1つのスートだけの入門テーブル。",
        },
        {
          href: "/spider-solitaire-2-suits",
          title: "2スートで遊ぶ",
          description: "おすすめの日常モード。",
        },
        {
          href: "/spider-solitaire-4-suits",
          title: "4スートで遊ぶ",
          description: "クラシックな上級チャレンジ。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "攻略ガイド",
          description: "すべての難易度に通用する習慣。",
        },
      ],
      faq: [
        {
          q: "スパイダーソリティアで最も簡単な難易度は？",
          a: "1スートが最も簡単です。すべてのカードがスペードなので、降順のランはどれもグループとして動きます。2スートが中間、4スートが上級版です。",
        },
        {
          q: "スートが増えるとなぜ難しくなるのですか？",
          a: "スートが増えると各スートの各ランクの枚数が減り、混ざったスートの山が増えます。グループが分かれるため、ランクが連続しているだけで降順の列を動かすことはできません。同スートのシーケンスを守る必要があります。",
        },
        {
          q: "ほとんどのプレイヤーに最適な難易度は？",
          a: "2スートです。計画が必要なほど挑戦的で、短いセッションにも向くほど寛容です。多くのプレイヤーがこれをスパイダーソリティアの標準的な体験とみなしています。",
        },
        {
          q: "4スートの配布はすべて勝てますか？",
          a: "いいえ。ランダムな4スートの配布には、8組のランへの道がない局面も生まれます。経験豊富なプレイヤーは、負けるゲームもあると受け入れ、判断の質に集中します。",
        },
        {
          q: "難易度によってカードの枚数は変わりますか？",
          a: "いいえ。どのモードも104枚、10列、5回の配布を使います。変わるのはスートの分布だけです。",
        },
      ],
      blocks: [
        { type: "h2", id: "comparison", text: "簡単な比較" },
        {
          type: "table",
          head: ["モード", "デッキ", "各スートの各ランク枚数", "グループ移動", "向いている人"],
          rows: [
            ["1スート", "スペード104枚", "8", "すべての降順ラン", "初めてのゲームと仕組みの練習"],
            ["2スート", "スペードとハート", "4", "同スートのランだけ", "日常的なチャレンジ"],
            ["4スート", "4スートすべて", "2", "同スートのランだけ", "低い勝率も楽しめる経験者"],
          ],
        },
        { type: "h2", id: "one-suit", text: "1スート：入門テーブル" },
        {
          type: "p",
          text: "1スートのスパイダーソリティアは学ぶのに最適です。すべてのカードがスペードなので、降順のシーケンスはどれもグループとして動かせます。スートを確認する必要がなく、どのモードでも重要な2つのスキルに集中できます。裏向きのカードを表にすることと、空列をつくることです。",
        },
        {
          type: "p",
          text: "それでも本物のゲームです。山札は5回の配布に限られ、不注意な配置はAを埋めてしまいます。ただ読み取りの負担が軽いため、ゲームを完成させ、パターン認識を早く身につけられます。",
        },
        { type: "h2", id: "two-suits", text: "2スート：おすすめの中間" },
        {
          type: "p",
          text: "2スートは多くのプレイヤーが落ち着くモードです。各ランクが各スートに4枚あるため、混ざった山が計画を必要とする程度に現れ、盤面が混沌とするほどではありません。凡庸な一手からもたいてい立て直せるので、戦略の練習に適しています。",
        },
        {
          type: "p",
          text: "1スートから2スートへの変化は、主に読み取りの変化です。グループを動かす前にスートを確認し、同スートのランを守るために混ざった山をいつ崩すか決める必要があります。ランクと配布のルールは変わりません。",
        },
        { type: "h2", id: "four-suits", text: "4スート：クラシックな上級モード" },
        {
          type: "p",
          text: "4スートは、多くの人が「スパイダーソリティア」と言うときに指すバージョンです。各ランクが各スートに2枚なので、ランクが4つのスートに散らばり、混ざった山が支配的になります。同スートのランは作りにくく、守る価値が高くなります。空列は収納ではなく、重要な作業スペースになります。",
        },
        {
          type: "p",
          text: "勝率が下がることを覚悟しましょう。ランダムな配布は勝てないこともあり、1回の悪い配置を直すのに数十手かかることもあります。賞杯よりも過程を楽しむプレイヤー向けのモードです。",
        },
        { type: "h2", id: "progression", text: "うまくいく進め方" },
        {
          type: "ol",
          items: [
            "**ルールが自然になるまで1スートを遊ぶ。** ガイドを見なくても、配布が止められる理由とグループの動かし方を説明できるようになりましょう。",
            "**1週間は2スートを遊ぶ。** 単に合法手を指すのではなく、同スートのランを保つことに集中します。元に戻すで選択肢を比べましょう。",
            "**試したくなったら4スートに挑戦する。** 勝率だけを基準にしないでください。早い段階でカードを表にできた回数と、空列を確保できた回数を数えましょう。",
          ],
        },
        { type: "h2", id: "which-mode", text: "今どのモードを遊ぶべき？" },
        {
          type: "ul",
          items: [
            "**スパイダーソリティアを遊んだことがない：**[1スート](/spider-solitaire-1-suit)から始めましょう。",
            "**ルールを知っていて、バランスのよい1ゲームを楽しみたい：**[2スート](/spider-solitaire-2-suits)を遊びましょう。",
            "**2スートで勝ったことがあり、クラシックな挑戦がしたい：**[4スート](/spider-solitaire-4-suits)を遊びましょう。",
          ],
        },
        {
          type: "note",
          text: "**注意：** スート数は、54枚の開始配布、5回の山札配布、8組のランという勝利条件を変えません。別の数字を書いたガイドがあれば、それは別の変種かハウスルールを説明しています。",
        },
      ],
    },
  },
};
