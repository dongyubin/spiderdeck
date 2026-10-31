import type { PageDefinition } from "../types";

export const oneSuitPage: PageDefinition = {
  slug: "spider-solitaire-1-suit",
  contents: {
    en: {
      metaTitle: "Spider Solitaire 1 Suit – Play Free Beginner Game",
      metaDescription:
        "Play Spider Solitaire 1 suit free in your browser. Learn the beginner table, how groups move, and when to deal from the stock before moving up to two suits.",
      title: "Spider Solitaire 1 Suit",
      description:
        "Play beginner Spider Solitaire with one suit. Learn how runs move, how stock deals work, and when to graduate to two suits.",
      eyebrow: "Beginner table",
      lead: "**Spider Solitaire 1 suit** is the teaching table. Every card belongs to the same suit, so any descending run can move as a group. That removes the hardest reading problem and lets you focus on the two skills that decide every Spider game: revealing face-down cards and creating useful empty columns.",
      playable: true,
      difficulty: 1,
      playHref: "#article-body",
      playLabel: "Read the beginner guide",
      breadcrumb: "1 Suit",
      game: {
        name: "Spider Solitaire 1 Suit",
        description:
          "Free one-suit Spider Solitaire for beginners, playable in any modern browser with undo, hints, and statistics.",
        suits: 1,
      },
      related: [
        {
          href: "/spider-solitaire-2-suits",
          title: "Move Up to 2 Suits",
          description:
            "The recommended next step once single-suit games feel routine.",
        },
        {
          href: "/how-to-play",
          title: "How to Play",
          description: "The complete setup, move, and dealing walkthrough.",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "Strategy Guide",
          description: "Habits that carry over to every difficulty.",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "Compare Difficulties",
          description:
            "Deck composition and expected challenge at each level.",
        },
      ],
      faq: [
        {
          q: "What is 1-suit Spider Solitaire?",
          a: "It is Spider Solitaire played with spades only. The 104-card deck contains eight copies of every rank, all in one suit, so every descending group is also a same-suit group. It is the standard beginner variant.",
        },
        {
          q: "Is 1 suit too easy?",
          a: "It is much easier than 2 or 4 suits, but it is not automatic. You still have to expose face-down cards, manage empty columns, and decide when to spend a stock deal. It is the right table for learning those habits.",
        },
        {
          q: "When should I move up to 2 suits?",
          a: "When you can regularly finish a 1-suit game without relying on hints, and you can explain why each move improved the table. Two suits adds mixed stacks; the rank rules do not change.",
        },
        {
          q: "How many stock deals are there?",
          a: "Five. Each deal adds one card to every column, so all ten columns must be non-empty before the stock can be used. That rule is identical across 1, 2, and 4 suits.",
        },
        {
          q: "Can I play 1 suit on a phone?",
          a: "Yes. The board scales to the screen and supports both dragging and two-tap moves. The mobile guide covers the touch controls.",
        },
      ],
      blocks: [
        { type: "h2", id: "what-one-suit-is", text: "The beginner table, explained" },
        {
          type: "p",
          text: "A one-suit game uses all 104 cards, but only spades. That means eight copies of each rank from Ace to King. The rules are unchanged: build descending runs, complete eight King-to-Ace sequences, and use the stock when every column has a card and you cannot find a better tableau move.",
        },
        {
          type: "p",
          text: "Because every card shares a suit, any face-up descending sequence can move as a group. You do not have to inspect suits before dragging a stack. The challenge shifts to board management: which face-down cards can you expose, which columns can you empty, and when is a deal safe?",
        },
        { type: "h2", id: "learn", text: "What 1 suit teaches" },
        {
          type: "ul",
          items: [
            "**Face-down cards are the clock.** Every flip gives you more information and more legal moves. If a move reveals a hidden card without ruining a run, it is usually worth taking.",
            "**Empty columns are flexible space.** Moving a whole column elsewhere opens a slot that can hold a King or a partial run while you rearrange the table.",
            "**Stocks are limited.** Five deals, then no more. Each one should unlock something, not simply add ten cards to the pile.",
            "**Completed runs remove clutter.** When a King-to-Ace sequence forms in one suit, it clears automatically. That can expose the card beneath it and open space.",
          ],
        },
        { type: "h2", id: "strategy", text: "A simple plan for your first games" },
        {
          type: "ol",
          items: [
            "**Flip before you deal.** Make every legal tableau move that reveals a face-down card before touching the stock.",
            "**Build toward Kings.** A King is the anchor of a complete run. If a King is buried, exposing it should be a priority.",
            "**Keep low cards accessible.** Aces and twos are easy to bury under tidy-looking stacks. Check the bottom of each run before covering a low card.",
            "**Use undo to test a plan.** Try the move, inspect the new board, then reverse it if nothing improved. There is no penalty for undo.",
            "**Finish one suit at a time.** In one-suit Spider, that means complete one King-to-Ace run before scattering effort across every column.",
          ],
        },
        {
          type: "note",
          text: "**Beginner benchmark:** try to finish a 1-suit game in under 120 moves. Do not chase the number if it forces bad habits; use it as a signal that you are planning rather than reacting.",
        },
        { type: "h2", id: "when-to-move-up", text: "When to graduate to 2 suits" },
        {
          type: "p",
          text: "Move up when the mechanics feel automatic: you know why a deal is blocked, you recognize when a column can be emptied, and you can spot a buried King without scanning every card twice. Two suits adds one new reading task — telling same-suit runs from mixed stacks — but the underlying strategy is the same.",
        },
        {
          type: "p",
          text: "Open the [2-suit table](/spider-solitaire-2-suits) when you are ready. If the mixed stacks feel overwhelming, play a few more 1-suit games with a specific goal: finish each game with at least two empty columns at some point. That skill transfers directly.",
        },
        { type: "h2", id: "controls", text: "Controls and helpful settings" },
        {
          type: "p",
          text: "Drag a card or run to another column, or tap a card and then tap the destination column. Undo is in the bottom bar (or press Z on a keyboard). Hint highlights a legal move (H). Space deals from the stock when the deal is available. Settings lets you change the card front, card back, felt colour, sound, and default difficulty.",
        },
      ],
    },

    zh: {
      metaTitle: "蜘蛛纸牌单花色 – 免费入门游戏",
      metaDescription:
        "在浏览器中免费玩蜘蛛纸牌单花色。了解入门牌桌、整组牌如何移动，以及何时该从牌堆发牌，再进阶到双花色。",
      title: "蜘蛛纸牌单花色",
      description:
        "用单花色玩入门蜘蛛纸牌。了解顺子如何移动、牌堆发牌如何运作，以及何时进阶到双花色。",
      eyebrow: "入门牌桌",
      lead: "**蜘蛛纸牌单花色**是教学牌桌。所有牌都属于同一花色，因此任何递减牌组都能整组移动。这消除了最难的读牌问题，让你专注决定每一局蜘蛛纸牌的两个技能：翻开背面朝上的牌，以及创造有用的空列。",
      playable: true,
      difficulty: 1,
      playHref: "#article-body",
      playLabel: "阅读入门指南",
      breadcrumb: "单花色",
      game: {
        name: "蜘蛛纸牌单花色 – SpiderDeck",
        description:
          "面向新手的免费单花色蜘蛛纸牌，可在任何现代浏览器中游玩，支持撤销、提示和统计。",
        suits: 1,
      },
      related: [
        {
          href: "/spider-solitaire-2-suits",
          title: "进阶到双花色",
          description: "单花色对局变得熟练后，推荐的下一步。",
        },
        {
          href: "/how-to-play",
          title: "玩法说明",
          description: "完整的开局、移动和发牌流程。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "策略指南",
          description: "适用于所有难度的习惯。",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "难度对比",
          description: "各难度的牌组构成与预期挑战。",
        },
      ],
      faq: [
        {
          q: "单花色蜘蛛纸牌是什么？",
          a: "这是只用黑桃进行的蜘蛛纸牌。104 张牌中每个点数有八张，全在同一花色，因此任何递减牌组也都是同花色牌组。它是标准的入门变体。",
        },
        {
          q: "单花色太简单了吗？",
          a: "它比双花色或四花色容易得多，但并非自动获胜。你仍需翻开背面朝上的牌、管理空列，并决定何时使用牌堆发牌。它是学习这些习惯的合适牌桌。",
        },
        {
          q: "什么时候该进阶到双花色？",
          a: "当你能经常在不依赖提示的情况下完成单花色对局，并且能解释每一步为何改善了牌局时。双花色增加了混合牌堆，但点数规则没有改变。",
        },
        {
          q: "一共有多少次牌堆发牌？",
          a: "五次。每次发牌给每列各加一张牌，因此十列都必须非空才能使用牌堆。这条规则在单花色、双花色和四花色中完全相同。",
        },
        {
          q: "可以在手机上玩单花色吗？",
          a: "可以。牌桌会随屏幕缩放，既支持拖动，也支持两次点按移动。手机版指南介绍了触控操作。",
        },
      ],
      blocks: [
        { type: "h2", id: "what-one-suit-is", text: "入门牌桌详解" },
        {
          type: "p",
          text: "单花色对局使用全部 104 张牌，但只有黑桃，也就是从 A 到 K 每个点数各八张。规则不变：搭建递减顺子、完成八组从 K 到 A 的序列，并在每列都有牌、且找不到更好的牌桌移动时使用牌堆。",
        },
        {
          type: "p",
          text: "因为所有牌都是同一花色，任何面朝上的递减序列都能整组移动，拖动牌组前不必检查花色。挑战转移到牌局管理上：能翻开哪些暗牌、能清空哪些列，以及什么时候发牌才安全？",
        },
        { type: "h2", id: "learn", text: "单花色能教会你什么" },
        {
          type: "ul",
          items: [
            "**暗牌就是时钟。** 每翻开一张牌，都会带来更多信息和更多合法移动。如果一步移动能翻开暗牌又不破坏顺子，通常值得走。",
            "**空列是灵活的空间。** 把整列移到别处会空出一个位置，在你重新整理牌桌时，可以放一张 K 或一段不完整的顺子。",
            "**牌堆次数有限。** 只有五次发牌，用完就没有了。每次发牌都应该解锁一些东西，而不只是给牌堆再加十张牌。",
            "**完成的顺子会清理杂乱。** 当同一花色形成从 K 到 A 的序列时，它会自动清除，从而露出下面的牌并腾出空间。",
          ],
        },
        { type: "h2", id: "strategy", text: "前几局的简单计划" },
        {
          type: "ol",
          items: [
            "**发牌前先翻牌。** 在碰牌堆之前，先走完所有能翻开暗牌的合法牌桌移动。",
            "**朝 K 搭建。** K 是完整顺子的锚点。如果 K 被埋住，优先把它翻出来。",
            "**让低点数牌保持可达。** A 和 2 很容易被看似整齐的牌堆埋住。盖住低点数牌之前，先检查每段顺子的底部。",
            "**用撤销测试计划。** 先走一步，观察新牌局，如果没有改善就撤回。撤销没有任何惩罚。",
            "**一次完成一组顺子。** 在单花色蜘蛛纸牌中，这意味着先完成一组从 K 到 A 的顺子，再把精力分散到各列。",
          ],
        },
        {
          type: "note",
          text: "**新手基准：** 试着在 120 步以内完成一局单花色。如果这个数字会逼你养成坏习惯，就不要追它；把它当作你正在规划、而不是被动反应的信号。",
        },
        { type: "h2", id: "when-to-move-up", text: "何时进阶到双花色" },
        {
          type: "p",
          text: "当机制变得自然而然时就可以进阶：你知道发牌为何被阻止，能认出哪一列可以被清空，也能不必反复扫视就发现被埋住的 K。双花色只增加一项读牌任务——区分同花色顺子和混合牌堆——但底层策略是一样的。",
        },
        {
          type: "p",
          text: "准备好时，打开[双花色牌桌](/spider-solitaire-2-suits)。如果混合牌堆让你不知所措，就再打几局单花色，并设定一个具体目标：每局至少在某段时间保持两个空列。这项技能可以直接迁移。",
        },
        { type: "h2", id: "controls", text: "操作与实用设置" },
        {
          type: "p",
          text: "把一张牌或一组牌拖到另一列，或者先点一张牌、再点目标列。撤销位于底栏（也可以按键盘上的 Z）。提示会高亮一步合法移动（H）。发牌可用时，按空格从牌堆发牌。设置中可以更换牌面、牌背、绒布颜色、声音和默认难度。",
        },
      ],
    },

    ja: {
      metaTitle: "スパイダーソリティア 1スート – 無料入門ゲーム",
      metaDescription:
        "ブラウザで無料の1スート版スパイダーソリティア。入門テーブル、グループの動かし方、2スートに進む前に山札から配るタイミングを学べます。",
      title: "スパイダーソリティア 1スート",
      description:
        "1スートで遊ぶ入門用スパイダーソリティア。ランの動かし方、山札からの配布、2スートへ進むタイミングを学べます。",
      eyebrow: "入門テーブル",
      lead: "**スパイダーソリティア 1スート**は入門用のテーブルです。すべてのカードが同じスートなので、降順のランはどれもグループとして動かせます。最も難しい読み取りの問題がなくなり、スパイダーソリティアのすべてのゲームを決める2つのスキルに集中できます。裏向きのカードを表にすることと、役立つ空列をつくることです。",
      playable: true,
      difficulty: 1,
      playHref: "#article-body",
      playLabel: "入門ガイドを読む",
      breadcrumb: "1スート",
      game: {
        name: "スパイダーソリティア 1スート – SpiderDeck",
        description:
          "初心者向けの無料1スート版スパイダーソリティア。最新のブラウザで遊べ、元に戻す、ヒント、統計に対応しています。",
        suits: 1,
      },
      related: [
        {
          href: "/spider-solitaire-2-suits",
          title: "2スートに進む",
          description: "1スートのゲームに慣れたら次に進むべきステップ。",
        },
        {
          href: "/how-to-play",
          title: "遊び方",
          description: "準備、移動、配布の流れをすべて解説。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "攻略ガイド",
          description: "どの難易度にも通用する習慣。",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "難易度を比較",
          description: "各レベルのデッキ構成と予想される難しさ。",
        },
      ],
      faq: [
        {
          q: "1スートのスパイダーソリティアとは？",
          a: "スペードだけで遊ぶスパイダーソリティアです。104枚のデッキには各ランクが8枚ずつ、すべて同じスートで入っています。そのため降順のグループはすべて同スートのグループになります。標準的な入門版です。",
        },
        {
          q: "1スートは簡単すぎますか？",
          a: "2スートや4スートよりずっと簡単ですが、自動的に勝てるわけではありません。裏向きのカードを表にし、空列を管理し、山札をいつ使うか決める必要があります。そうした習慣を学ぶのに適したテーブルです。",
        },
        {
          q: "いつ2スートに進むべきですか？",
          a: "ヒントに頼らず1スートのゲームを日常的に完成でき、各手がなぜ盤面を良くしたのか説明できるようになったときです。2スートでは混ざった山が増えますが、ランクのルールは変わりません。",
        },
        {
          q: "山札からの配布は何回ありますか？",
          a: "5回です。配布のたびに各列へ1枚ずつ加わるため、山札を使うには10列すべてにカードが必要です。このルールは1・2・4スートで同じです。",
        },
        {
          q: "スマホでも1スートを遊べますか？",
          a: "はい。ボードは画面に合わせて拡大縮小し、ドラッグと2回タップの両方に対応しています。タッチ操作の詳細はモバイルガイドをご覧ください。",
        },
      ],
      blocks: [
        { type: "h2", id: "what-one-suit-is", text: "入門テーブルの説明" },
        {
          type: "p",
          text: "1スートのゲームでは104枚すべてを使いますが、スートはスペードだけです。つまりAからKまでの各ランクが8枚ずつあります。ルールは変わりません。降順のランを積み、KからAまでの8組のシーケンスを完成させ、すべての列にカードがあり、他に良い場の移動がないときに山札を使います。",
        },
        {
          type: "p",
          text: "すべてのカードが同じスートなので、表向きの降順のシーケンスはグループとして動かせます。山をドラッグする前にスートを確認する必要はありません。代わりに、どの裏向きのカードを表にできるか、どの列を空にできるか、いつ配布が安全かという盤面管理が課題になります。",
        },
        { type: "h2", id: "learn", text: "1スートで学べること" },
        {
          type: "ul",
          items: [
            "**裏向きのカードは時計です。** めくるたびに情報と合法手が増えます。ランを壊さずに裏向きのカードを表にできるなら、たいていは取る価値があります。",
            "**空列は柔軟なスペースです。** 列全体を別へ移すと、盤面を整理する間にKや途中のランを置ける空きができます。",
            "**山札は有限です。** 配布は5回で、それで終わりです。毎回、ただ10枚を積むのではなく、何かを進展させるべきです。",
            "**完成したランは散らかりを取り除きます。** 同スートでKからAまでのシーケンスができると自動的に消えます。その下のカードが表になり、スペースも空きます。",
          ],
        },
        { type: "h2", id: "strategy", text: "最初のゲームのための簡単な計画" },
        {
          type: "ol",
          items: [
            "**配る前にめくる。** 山札に触る前に、裏向きのカードを表にできる合法な場の移動をすべて行いましょう。",
            "**Kを目指して積む。** Kは完成したランの軸です。Kが埋まっているなら、それを表にすることが優先です。",
            "**低いカードを届く位置に保つ。** Aや2は、整って見える山の下に埋もれやすいです。低いカードを覆う前に、各ランの底を確認しましょう。",
            "**元に戻すで計画を試す。** 一手試して新しい盤面を見て、何も改善しなければ戻します。元に戻すにペナルティはありません。",
            "**1組ずつ完成させる。** 1スートのスパイダーソリティアでは、すべての列に努力を分散させるのではなく、まずKからAまでのランを1組完成させます。",
          ],
        },
        {
          type: "note",
          text: "**初心者の目安：** 1スートのゲームを120手以内に終えることを目指してみましょう。悪い習慣が身につくなら数字を追わないでください。考えて動いているかどうかの目安として使いましょう。",
        },
        { type: "h2", id: "when-to-move-up", text: "2スートに進む時期" },
        {
          type: "p",
          text: "仕組みが自然に感じられたら進みましょう。配布が止められる理由がわかり、どの列を空にできるか見分けられ、すべてのカードを二度見しなくても埋もれたKを見つけられるようになったときです。2スートでは、同スートのランと混ざった山を見分けるという読み取りが1つ増えますが、基本の戦略は同じです。",
        },
        {
          type: "p",
          text: "準備ができたら[2スートのテーブル](/spider-solitaire-2-suits)を開きましょう。混ざった山が手強すぎるなら、具体的な目標を決めて1スートをもう数ゲーム遊んでください。どのゲームでも一度は空列を2つ保つ、という目標です。そのスキルはそのまま活かせます。",
        },
        { type: "h2", id: "controls", text: "操作と便利な設定" },
        {
          type: "p",
          text: "カードやランを別の列へドラッグするか、カードをタップしてから移動先の列をタップします。元に戻すは下部バーにあります（キーボードのZでも可）。ヒントは合法手を強調します（H）。配布が可能なときはスペースキーで山札から配れます。設定ではカード表、カード裏、フェルトの色、サウンド、デフォルトの難易度を変更できます。",
        },
      ],
    },
  },
};
