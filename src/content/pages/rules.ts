import type { PageDefinition } from "../types";

export const rulesPage: PageDefinition = {
  slug: "spider-solitaire-rules",
  contents: {
    en: {
      metaTitle: "Spider Solitaire Rules – Complete Reference",
      metaDescription:
        "The complete rules of Spider Solitaire: deck and tableau setup, legal moves, same-suit groups, empty columns, stock deals, completed runs, and edge cases.",
      title: "Spider Solitaire Rules",
      description:
        "Full Spider Solitaire rules: deck composition, tableau setup, legal moves, dealing restrictions, empty columns, completed runs, and edge cases.",
      eyebrow: "Rules reference",
      breadcrumb: "Rules",
      playHref: "/",
      playLabel: "Play the table",
      lead: "This is the rules page to check mid-game. It covers the standard rules used by the table on this site, including the situations that are easy to misremember: moving part of a run, filling an empty column, blocked deals, and automatic foundation clears.",
      related: [
        {
          href: "/how-to-play",
          title: "How to Play",
          description:
            "The friendlier walkthrough if you are learning for the first time.",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "Strategy Guide",
          description: "How to apply the rules to actual board decisions.",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "Difficulty Comparison",
          description: "How suit count changes deck composition and difficulty.",
        },
        {
          href: "/spider-solitaire-faq",
          title: "FAQ",
          description: "Short answers to the questions players ask most.",
        },
      ],
      faq: [
        {
          q: "Can any card go into an empty column?",
          a: "Yes, in the standard rules used here. A single face-up card or a valid same-suit descending group may move into an empty column; it does not have to be a King. Some house rules require a King, but that restriction is not applied on this site.",
        },
        {
          q: "Can I move part of a same-suit run?",
          a: "Yes. If a same-suit sequence is 9-8-7, you may move 8-7 together onto a 9 elsewhere, leaving the original 9 behind. You may also move only the 7. Each moving group must itself be a same-suit descending run.",
        },
        {
          q: "Does a mixed-suit run count as complete?",
          a: "No. A complete sequence must be King down to Ace in one suit. Rank order alone is not enough. The game will not clear a mixed-suit sequence.",
        },
        {
          q: "What happens if a stock deal fills the last column with a card that creates a run?",
          a: "The deal completes normally, one card is added to each column, and then any resulting King-to-Ace same-suit run clears automatically. You do not get an extra deal or a choice to refuse the clear.",
        },
        {
          q: "Is undo limited?",
          a: "No. Undo is unlimited in this implementation. It also restores the game after a loss, so you can back out of a dead-end move. It cannot undo a game that has already been won.",
        },
        {
          q: "Is there a time limit?",
          a: "No. The timer records how long the game takes, but it never forces a move or ends the game. You can leave a game open and return later.",
        },
      ],
      blocks: [
        { type: "h2", id: "objective", text: "1. Objective" },
        {
          type: "p",
          text: "Build eight complete sequences of cards, each running from King down to Ace in a single suit. Each completed sequence automatically moves to the foundation. The game is won when all eight sequences have been cleared.",
        },
        { type: "h2", id: "deck", text: "2. Deck and difficulty" },
        {
          type: "p",
          text: "The game always uses 104 cards. Difficulty changes which suits appear:",
        },
        {
          type: "ul",
          items: [
            "**1 suit:** spades only. Every rank appears eight times.",
            "**2 suits:** spades and hearts. Every rank appears four times in each suit.",
            "**4 suits:** spades, hearts, diamonds, and clubs. Every rank appears twice in each suit.",
          ],
        },
        { type: "h2", id: "tableau", text: "3. Tableau setup" },
        {
          type: "p",
          text: "Ten columns receive 54 cards. The first four columns contain six cards and the remaining six columns contain five. Only the bottom card of each column is face up. The other 50 cards form the stock, divided into five deals of ten cards.",
        },
        {
          type: "p",
          text: "The foundation area is empty at the start. There is no waste pile. The stock sits beside the foundation area, and the stock is only usable under the condition in section 6.",
        },
        { type: "h2", id: "legal-moves", text: "4. Legal tableau moves" },
        {
          type: "p",
          text: "A face-up card may be placed on a card of the next-higher rank:",
        },
        {
          type: "ul",
          items: [
            "Any suit is allowed for a single card.",
            "A group of two or more cards may move only if the entire group is a descending, same-suit run ending on the card being placed.",
            "A card or group may move into an empty column regardless of its rank.",
          ],
        },
        {
          type: "p",
          text: "The moving group is defined by the card you pick up. If a column contains 10-9-8-7 all in hearts, picking up the 9 moves 9-8-7 as a group onto a 10 elsewhere. Picking up the 8 moves only 8-7. A group that alternates suits is not movable as a unit.",
        },
        { type: "h2", id: "flip", text: "5. Revealing face-down cards" },
        {
          type: "p",
          text: "When the last face-up card is removed from a column, the next face-down card flips face up automatically. If multiple face-down cards are exposed by a single move, only the top one flips; the others remain face down until the newly exposed card is moved.",
        },
        { type: "h2", id: "stock", text: "6. Dealing from the stock" },
        {
          type: "p",
          text: "A deal adds one face-up card to each of the ten columns. A deal is legal only when:",
        },
        {
          type: "ul",
          items: [
            "the stock still contains a deal, and",
            "every tableau column contains at least one card.",
          ],
        },
        {
          type: "p",
          text: "If any column is empty, the stock is disabled until that column is filled. There are five deals in a game. After the fifth, the stock is empty and the game must be finished using tableau moves.",
        },
        { type: "h2", id: "complete", text: "7. Completing a sequence" },
        {
          type: "p",
          text: "A sequence clears when a column contains 13 cards in descending order from King to Ace, all in the same suit. The clear is automatic and immediate. The sequence moves to the foundation, and the exposed card underneath flips face up if needed.",
        },
        {
          type: "p",
          text: "If a move or deal creates more than one complete sequence, each is cleared in turn. A mixed-suit sequence with the correct ranks does not clear.",
        },
        { type: "h2", id: "win", text: "8. Winning and losing" },
        {
          type: "p",
          text: "The game is won when eight sequences have cleared. It is lost when no legal tableau move exists and no stock deal is available. In this implementation, a loss can be undone, because undo is unlimited; starting a new game records the abandoned game as a loss.",
        },
        { type: "h2", id: "edge-cases", text: "9. Edge cases, answered" },
        {
          type: "table",
          head: ["Situation", "Rule"],
          rows: [
            [
              "Move a card onto a face-down card",
              "Not allowed. The target must be face up.",
            ],
            [
              "Move a group with mixed suits",
              "Not allowed. Only a same-suit descending run moves as a group.",
            ],
            [
              "Move a single card onto a different suit",
              "Allowed if the rank is exactly one lower.",
            ],
            [
              "Empty column must receive a King",
              "No. Any face-up card or valid run is allowed here.",
            ],
            [
              "Deal while a column is empty",
              "Not allowed. Fill the column first.",
            ],
            [
              "Complete a run in the middle of a column",
              "It clears automatically, even if cards remain below it.",
            ],
            [
              "Undo a completed run",
              "Allowed. Undo restores the state before the move that created it.",
            ],
            [
              "Re-deal after the stock is empty",
              "No. Only the original five deals exist.",
            ],
          ],
        },
        { type: "h2", id: "scoring", text: "10. Scoring and statistics" },
        {
          type: "p",
          text: "This table does not use a points score. It records the number of moves, the elapsed time, and win/loss statistics per difficulty. Fewer moves and a shorter time are the natural comparisons. Undo count is tracked internally but is not used to penalize the result.",
        },
        {
          type: "note",
          text: "**House rules:** some Spider Solitaire versions require a King for an empty column or forbid moving part of a run. Those variants are not used here. If you are following a guide written for a different app, check its empty-column rule before assuming it matches.",
        },
      ],
    },

    zh: {
      metaTitle: "蜘蛛纸牌规则 – 完整参考",
      metaDescription:
        "蜘蛛纸牌完整规则：牌组与牌桌布置、合法移动、同花色牌组、空列、牌堆发牌、完成的顺子以及各种边界情况。",
      title: "蜘蛛纸牌规则",
      description:
        "完整的蜘蛛纸牌规则：用牌构成、牌桌布置、合法移动、发牌限制、空列、完成的顺子以及边界情况。",
      eyebrow: "规则速查",
      breadcrumb: "规则",
      playHref: "/",
      playLabel: "开始打牌",
      lead: "这是一页可以在对局中途随时查阅的规则说明。它介绍本站牌桌采用的标准规则，也包括那些容易记错的情况：只移动顺子的一部分、填入空列、被禁止的发牌，以及自动收进基础区。",
      related: [
        {
          href: "/how-to-play",
          title: "蜘蛛纸牌玩法",
          description: "如果你是第一次学，读起来更轻松的教程。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "策略指南",
          description: "如何把规则用到实际的牌局决策中。",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "难度对比",
          description: "花色数量如何改变用牌构成和难度。",
        },
        {
          href: "/spider-solitaire-faq",
          title: "常见问题",
          description: "玩家最常问的问题的简短回答。",
        },
      ],
      faq: [
        {
          q: "任何牌都能放进空列吗？",
          a: "可以，本站采用标准规则。单张明牌或合法的同花色递减牌组都能移入空列，不必是 K。有些地方规则要求空列只能放 K，但本站不采用这一限制。",
        },
        {
          q: "可以只移动同花色顺子的一部分吗？",
          a: "可以。如果同花色顺子是 9-8-7，你可以把 8-7 一起移到别处的 9 上，把原来的 9 留在原地，也可以只移动 7。但每次移动的牌组本身必须是同花色递减顺子。",
        },
        {
          q: "花色混合的顺子算完成吗？",
          a: "不算。完成的顺子必须是同一花色从 K 到 A。仅仅点数顺序正确还不够，游戏不会清除花色混合的顺子。",
        },
        {
          q: "如果发牌给最后一列补上的牌正好组成顺子，会怎样？",
          a: "发牌会正常完成，每列各加一张牌，随后形成的同花色 K 到 A 顺子会自动清除。你不会因此多得一次发牌，也不能拒绝清除。",
        },
        {
          q: "撤销次数有限制吗？",
          a: "没有。本站的撤销不限次数，而且可以在输局后恢复，所以你能从死局中退出来。但已经获胜的对局无法撤销。",
        },
        {
          q: "有时间限制吗？",
          a: "没有。计时器只记录对局时长，不会强制你走棋或结束游戏。你可以把对局放着，稍后再回来。",
        },
      ],
      blocks: [
        { type: "h2", id: "objective", text: "1. 游戏目标" },
        {
          type: "p",
          text: "凑出八组完整的顺子，每组都是同一花色从 K 递减到 A。每完成一组就会自动移入基础区。八组全部清完，游戏即获胜。",
        },
        { type: "h2", id: "deck", text: "2. 用牌与难度" },
        {
          type: "p",
          text: "游戏始终使用 104 张牌，难度只改变出现哪些花色：",
        },
        {
          type: "ul",
          items: [
            "**单花色：** 只有黑桃，每个点数出现八次。",
            "**双花色：** 黑桃和红桃，每个点数在每种花色中出现四次。",
            "**四花色：** 黑桃、红桃、方块和梅花，每个点数在每种花色中出现两次。",
          ],
        },
        { type: "h2", id: "tableau", text: "3. 牌桌布置" },
        {
          type: "p",
          text: "十列共发 54 张牌，前四列各六张，后六列各五张。每列只有最下面一张牌面朝上。其余 50 张组成牌堆，分成五次、每次十张。",
        },
        {
          type: "p",
          text: "基础区开局为空，也没有废牌堆。牌堆放在基础区旁边，只有在第 6 节所述条件满足时才能使用。",
        },
        { type: "h2", id: "legal-moves", text: "4. 牌桌上的合法移动" },
        {
          type: "p",
          text: "面朝上的牌可以放到点数大一位的牌上：",
        },
        {
          type: "ul",
          items: [
            "单张牌不限花色。",
            "两张以上的牌组，只有当整组都是同花色递减顺子、并以正在落位的那张牌结尾时，才能整体移动。",
            "一张牌或一组牌可以移入空列，不受点数限制。",
          ],
        },
        {
          type: "p",
          text: "可移动的牌组由你拿起的那张牌决定。如果一列中有全是红桃的 10-9-8-7，拿起 9 就会把 9-8-7 作为一组移到别处的 10 上；拿起 8 则只移动 8-7。花色交替的牌组不能作为整体移动。",
        },
        { type: "h2", id: "flip", text: "5. 翻开暗牌" },
        {
          type: "p",
          text: "当一列中最后一张明牌被移走时，下面那张背面朝上的牌会自动翻开。如果一步棋同时露出多张暗牌，也只有最上面一张会翻开，其余的要等新露出的牌被移走后才翻。",
        },
        { type: "h2", id: "stock", text: "6. 从牌堆发牌" },
        {
          type: "p",
          text: "一次发牌会给十列各加一张明牌。只有在以下条件同时满足时才能发牌：",
        },
        {
          type: "ul",
          items: ["牌堆里还有牌可发；", "牌桌每一列都至少有一张牌。"],
        },
        {
          type: "p",
          text: "只要有一列是空的，牌堆就不可用，直到该列被填上。一局共有五次发牌。第五次之后牌堆为空，必须靠牌桌上的移动打完。",
        },
        { type: "h2", id: "complete", text: "7. 完成一组顺子" },
        {
          type: "p",
          text: "当一列中出现同一花色、从 K 到 A 递减的 13 张牌时，这组顺子就会清除。清除是自动且立即发生的：顺子移入基础区，下面露出的牌如果需要会翻面朝上。",
        },
        {
          type: "p",
          text: "如果一次移动或发牌同时形成多组完整顺子，它们会依次清除。花色混合但点数正确的顺子不会被清除。",
        },
        { type: "h2", id: "win", text: "8. 获胜与失败" },
        {
          type: "p",
          text: "清完八组顺子即获胜。当牌桌上没有任何合法移动、牌堆也无法发牌时，对局失败。在本站实现中，输局可以撤销，因为撤销不限次数；如果直接开始新游戏，当前对局会记为一次失败。",
        },
        { type: "h2", id: "edge-cases", text: "9. 边界情况解答" },
        {
          type: "table",
          head: ["情况", "规则"],
          rows: [
            ["把牌移到背面朝上的牌上", "不允许。目标牌必须面朝上。"],
            [
              "移动花色混合的牌组",
              "不允许。只有同花色递减顺子才能整体移动。",
            ],
            ["把单张牌移到不同花色的牌上", "只要点数正好小一位就允许。"],
            ["空列必须放 K", "不需要。任何明牌或合法顺子都可以放入。"],
            ["在有列空着时发牌", "不允许。先填满该列。"],
            ["在列的中间完成顺子", "会自动清除，即使它下面还有牌。"],
            [
              "撤销已经完成的顺子",
              "允许。撤销会回到形成该顺子之前的状态。",
            ],
            ["牌堆空了之后再发牌", "不能。全局只有最初的五次发牌。"],
          ],
        },
        { type: "h2", id: "scoring", text: "10. 计分与统计" },
        {
          type: "p",
          text: "这张牌桌不使用分数计分，而是记录步数、用时以及各难度的胜负统计。步数更少、用时更短自然就是更好的表现。撤销次数会在内部记录，但不会用来惩罚结果。",
        },
        {
          type: "note",
          text: "**地方规则：** 有些蜘蛛纸牌版本要求空列只能放 K，或者禁止只移动顺子的一部分。本站不采用这些变体。如果你参照的是为其他应用写的攻略，先确认它的空列规则，别想当然。",
        },
      ],
    },

    ja: {
      metaTitle: "スパイダーソリティアのルール – 完全リファレンス",
      metaDescription:
        "スパイダーソリティアの完全ルール。デッキと場の初期配置、合法手、同スートのグループ、空列、山札からの配布、完成したラン、例外ケースまで。",
      title: "スパイダーソリティアのルール",
      description:
        "スパイダーソリティアの詳細ルール。デッキ構成、場の初期配置、合法手、配布の制限、空列、完成したラン、例外ケースを解説します。",
      eyebrow: "ルール早見表",
      breadcrumb: "ルール",
      playHref: "/",
      playLabel: "テーブルでプレイ",
      lead: "ゲームの途中で確認できるルールページです。このサイトのテーブルが採用している標準ルールを、間違えやすい状況も含めてまとめました。ランの一部を動かす場合、空列を埋める場合、配布できない場合、ファウンデーションへの自動移動などです。",
      related: [
        {
          href: "/how-to-play",
          title: "遊び方",
          description: "初めて学ぶなら、よりやさしい手順ガイド。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "攻略ガイド",
          description: "ルールを実際の盤面の判断にどう活かすか。",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "難易度の比較",
          description: "スート数がデッキ構成と難易度をどう変えるか。",
        },
        {
          href: "/spider-solitaire-faq",
          title: "よくある質問",
          description: "プレイヤーが最もよく聞く疑問への短い回答。",
        },
      ],
      faq: [
        {
          q: "どのカードでも空列に置けますか？",
          a: "はい、ここで採用している標準ルールでは可能です。表向きのカード1枚、または合法な同スートの降順グループを空列へ動かせます。Kである必要はありません。Kのみというハウスルールもありますが、このサイトでは適用していません。",
        },
        {
          q: "同スートのランの一部だけ動かせますか？",
          a: "はい。同スートの並びが9-8-7なら、8-7をまとめて別の9の上へ動かし、元の9を残せます。7だけを動かすこともできます。動かすグループ自体が同スートの降順ランである必要があります。",
        },
        {
          q: "スートが混ざったランは完成とみなされますか？",
          a: "いいえ。完成したランは1つのスートでKからAまで並んでいる必要があります。ランクの順序だけでは不十分で、スートが混ざったランは片付きません。",
        },
        {
          q: "配布で最後の列に置かれたカードがランを完成させた場合は？",
          a: "配布は通常どおり行われ、各列に1枚ずつ加わったあと、できた同スートのKからAのランが自動的に片付きます。追加の配布はなく、片付けを断ることもできません。",
        },
        {
          q: "元に戻す回数に制限はありますか？",
          a: "ありません。この実装では元に戻すは無制限です。負けたあとでも復元できるので、行き詰まった手から戻れます。ただし勝利済みのゲームは元に戻せません。",
        },
        {
          q: "時間制限はありますか？",
          a: "ありません。タイマーはゲームにかかった時間を記録するだけで、手を急かしたりゲームを終了させたりはしません。ゲームを開いたままにして後で戻ることもできます。",
        },
      ],
      blocks: [
        { type: "h2", id: "objective", text: "1. 目的" },
        {
          type: "p",
          text: "1つのスートでKからAへ降順に並ぶ完全なランを8本作ります。完成したランは自動的にファウンデーションへ移動します。8本すべてを片付ければ勝利です。",
        },
        { type: "h2", id: "deck", text: "2. デッキと難易度" },
        {
          type: "p",
          text: "ゲームは常に104枚のカードを使います。難易度によって登場するスートが変わります。",
        },
        {
          type: "ul",
          items: [
            "**1スート：** スペードのみ。各ランクが8回ずつ登場します。",
            "**2スート：** スペードとハート。各ランクが各スートに4回ずつ登場します。",
            "**4スート：** スペード、ハート、ダイヤ、クラブ。各ランクが各スートに2回ずつ登場します。",
          ],
        },
        { type: "h2", id: "tableau", text: "3. 場の初期配置" },
        {
          type: "p",
          text: "10列に54枚が配られます。最初の4列が6枚、残りの6列が5枚です。各列で表向きなのは一番下の1枚だけです。残りの50枚が山札となり、10枚ずつ5回分に分かれます。",
        },
        {
          type: "p",
          text: "ファウンデーションは最初は空です。ウェイストの山もありません。山札はファウンデーションの横に置かれ、第6節の条件を満たすときだけ使えます。",
        },
        { type: "h2", id: "legal-moves", text: "4. 場の合法手" },
        {
          type: "p",
          text: "表向きのカードは、1つ上のランクのカードの上に置けます。",
        },
        {
          type: "ul",
          items: [
            "1枚のカードならスートは問いません。",
            "2枚以上のグループは、グループ全体が降順の同スートのランで、置く先のカードの上で終わっている場合だけ動かせます。",
            "カードやグループは、ランクに関係なく空列へ動かせます。",
          ],
        },
        {
          type: "p",
          text: "動かせるグループは、つかんだカードで決まります。列にハートの10-9-8-7が並んでいるとき、9をつかめば9-8-7がグループとして別の10の上へ移ります。8をつかめば8-7だけが動きます。スートが交互に入れ替わるグループはまとめて動かせません。",
        },
        { type: "h2", id: "flip", text: "5. 裏向きのカードをめくる" },
        {
          type: "p",
          text: "列から最後の表向きカードが取り除かれると、次にあった裏向きのカードが自動的に表向きになります。1手で複数の裏向きカードが露出しても、めくれるのは一番上だけです。ほかのカードは、新たに表になったカードが動かされるまで裏向きのままです。",
        },
        { type: "h2", id: "stock", text: "6. 山札からの配布" },
        {
          type: "p",
          text: "配布すると、10列それぞれに表向きのカードが1枚ずつ加わります。配布できるのは次の条件を満たすときだけです。",
        },
        {
          type: "ul",
          items: [
            "山札に配布できるカードが残っている。",
            "場のすべての列に少なくとも1枚のカードがある。",
          ],
        },
        {
          type: "p",
          text: "空の列が1つでもあると、その列が埋まるまで山札は使えません。1ゲームの配布は5回です。5回目が終わると山札は空になり、残りは場の移動だけで解くことになります。",
        },
        { type: "h2", id: "complete", text: "7. ランの完成" },
        {
          type: "p",
          text: "列に同じスートでKからAまで降順に13枚並ぶと、そのランは片付きます。片付けは自動かつ即座に行われ、ランはファウンデーションへ移動し、下にあったカードは必要に応じて表向きになります。",
        },
        {
          type: "p",
          text: "1手または配布で複数のランが同時に完成した場合、それぞれ順番に片付きます。ランクが正しくてもスートが混ざったランは片付きません。",
        },
        { type: "h2", id: "win", text: "8. 勝利と敗北" },
        {
          type: "p",
          text: "8本のランを片付ければ勝利です。場に合法手がなく、山札からの配布もできないときに敗北となります。この実装では元に戻すが無制限なので、敗北後も戻れます。新しいゲームを始めると、中断したゲームは敗北として記録されます。",
        },
        { type: "h2", id: "edge-cases", text: "9. 例外ケースの回答" },
        {
          type: "table",
          head: ["状況", "ルール"],
          rows: [
            [
              "裏向きのカードの上にカードを置く",
              "できません。置く先は表向きである必要があります。",
            ],
            [
              "スートが混ざったグループを動かす",
              "できません。同スートの降順ランのみグループとして動かせます。",
            ],
            [
              "1枚のカードを別スートの上に置く",
              "ランクがちょうど1つ下なら可能です。",
            ],
            [
              "空列にはKしか置けない",
              "いいえ。ここでは表向きのカードなら何でも、合法なランも置けます。",
            ],
            ["列が空のまま配布する", "できません。先にその列を埋めてください。"],
            [
              "列の途中でランを完成させる",
              "自動的に片付きます。下にカードが残っていても同じです。",
            ],
            [
              "完成したランを元に戻す",
              "可能です。元に戻すと、そのランができた手の前の状態に戻ります。",
            ],
            ["山札が空になってから配り直す", "できません。配布は最初の5回だけです。"],
          ],
        },
        { type: "h2", id: "scoring", text: "10. スコアと統計" },
        {
          type: "p",
          text: "このテーブルはポイント制ではなく、手数、経過時間、難易度別の勝敗統計を記録します。手数が少なく時間が短いほど良い結果です。元に戻す回数は内部で記録されますが、結果のペナルティには使いません。",
        },
        {
          type: "note",
          text: "**ハウスルール：** スパイダーソリティアの一部のバージョンでは、空列にKが必要だったり、ランの一部を動かすことが禁止されていたりします。このサイトではそうした変種は採用していません。別のアプリ向けに書かれたガイドを参考にする場合は、空列のルールを確認してから同じだと思わないようにしましょう。",
        },
      ],
    },
  },
};
