import type { PageDefinition } from "../types";

export const strategyPage: PageDefinition = {
  slug: "spider-solitaire-strategy",
  contents: {
    en: {
      metaTitle: "Spider Solitaire Strategy – 10 Tips That Work",
      metaDescription:
        "Improve your Spider Solitaire win rate with ten practical strategies: exposing hidden cards, managing empty columns, delaying deals, and keeping suits separate.",
      title: "Spider Solitaire Strategy",
      description:
        "Ten practical Spider Solitaire strategies covering hidden cards, empty columns, stock timing, suit separation, and endgame planning.",
      eyebrow: "Strategy guide",
      breadcrumb: "Strategy",
      playHref: "/",
      playLabel: "Play a game",
      lead: "Spider Solitaire is a game of information and space. You start with 44 face-down cards, five stock deals, and ten columns that are already crowded. The tips below are ordered by how often they change the outcome of a real game, not by how clever they sound.",
      related: [
        {
          href: "/spider-solitaire-rules",
          title: "Rules Reference",
          description: "Make sure the group and deal rules are clear first.",
        },
        {
          href: "/spider-solitaire-2-suits",
          title: "2-Suit Guide",
          description: "How these habits apply to the default table.",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "Difficulty Comparison",
          description: "Why the same strategy feels different at 4 suits.",
        },
        {
          href: "/spider-solitaire-faq",
          title: "FAQ",
          description:
            "Short answers about undo, hints, scoring, and saved games.",
        },
      ],
      faq: [
        {
          q: "What is the most important Spider Solitaire strategy?",
          a: "Expose face-down cards. Every flip adds information and legal options. If you can reveal a hidden card without wrecking a same-suit run, that move is usually stronger than a tidy rank match that changes nothing.",
        },
        {
          q: "Should I always empty a column?",
          a: "No, but empty columns are powerful. They let you relocate Kings, park partial runs, and rearrange a crowded tableau. Try to keep at least one empty column available when a stock deal is coming.",
        },
        {
          q: "When should I deal from the stock?",
          a: "Deal when tableau moves are exhausted, when a deal is likely to complete a run, or when you need new cards to expose a buried sequence. Avoid dealing just because the stock is available; each deal can bury progress.",
        },
        {
          q: "Is it better to build long runs or spread out?",
          a: "Spread progress across the table while keeping same-suit runs intact. One very long run is useful, but eight completions win the game. You need multiple suits advancing, not one showcase column.",
        },
        {
          q: "Does undo help me improve?",
          a: "Yes, if you use it to compare alternatives rather than to fish for a lucky outcome. Try a move, study the new board, and reverse it if the position is worse. That is deliberate practice.",
        },
      ],
      blocks: [
        {
          type: "h2",
          id: "tip-1",
          text: "1. Flip face-down cards before anything else",
        },
        {
          type: "p",
          text: "Hidden cards are the real opponent. A rank match that leaves the same number of face-down cards does not improve your position much. A move that exposes a new card gives you new options and, often, a new empty column. Before every deal, ask: *is there a move that flips something?*",
        },
        {
          type: "h2",
          id: "tip-2",
          text: "2. Treat empty columns as working space",
        },
        {
          type: "p",
          text: "An empty column is not just storage. It is the only place where you can temporarily park a King or a long run while you rearrange another column. Filling every empty column with the first available King feels productive but removes flexibility. Try to keep one slot free, especially before a stock deal.",
        },
        { type: "h2", id: "tip-3", text: "3. Delay stock deals" },
        {
          type: "p",
          text: "The stock is limited to five deals and each one adds ten cards you did not choose. Deal when the tableau is stuck, when the deal will complete a run, or when you need new ranks to reach a buried sequence. Do not deal just because every column has a card.",
        },
        {
          type: "p",
          text: "A useful pre-deal checklist: no move flips a card, no move empties a column, and no same-suit run can be extended. If all three are true, a deal is justified.",
        },
        {
          type: "h2",
          id: "tip-4",
          text: "4. Keep same-suit runs together",
        },
        {
          type: "p",
          text: "A same-suit run is the only group that moves as a unit. In two-suit and four-suit games, suit purity is future mobility. When two moves achieve the same rank progress, pick the one that keeps one suit together. A mixed stack may look tidy but can stall the whole column later.",
        },
        { type: "h2", id: "tip-5", text: "5. Do not bury low cards" },
        {
          type: "p",
          text: "Aces and twos are easy to cover because many cards can legally sit on them. But a run cannot complete without reaching the Ace. Before covering a low card, check whether you can still expose it. If not, find another place for the card you are moving.",
        },
        {
          type: "h2",
          id: "tip-6",
          text: "6. Build toward Kings deliberately",
        },
        {
          type: "p",
          text: "A complete run starts at the King. If a King is buried, freeing it should be a medium-term goal. If a King is already exposed, you have a foundation for a run; protect the space around it and feed the descending ranks onto it when the suits cooperate.",
        },
        {
          type: "h2",
          id: "tip-7",
          text: "7. Read the suits before dragging a group",
        },
        {
          type: "p",
          text: "This sounds obvious until a fast game makes it automatic. Before moving multiple cards, read them top to bottom. If the suits alternate, only the top card moves. Many mistakes happen because a column looked like a same-suit run at a glance.",
        },
        {
          type: "h2",
          id: "tip-8",
          text: "8. Use hints as a second opinion, not an oracle",
        },
        {
          type: "p",
          text: "The hint button highlights a legal move. It does not evaluate long-term value. Use it when you are stuck or want to confirm that a group can move, then judge the suggestion against the board. A legal move can still be a bad move.",
        },
        { type: "h2", id: "tip-9", text: "9. Plan the last two deals" },
        {
          type: "p",
          text: "Late in the game, the stock is a deadline. Once two deals remain, start thinking about which suits are close to completion and which columns are still blocking them. Use the final deals to fill gaps rather than to discover the board.",
        },
        { type: "h2", id: "tip-10", text: "10. Know when to restart" },
        {
          type: "p",
          text: "Random deals are not all winnable, especially at four suits. If the stock is gone, no same-suit runs are progressing, and every column is blocked, a new game is better practice than a twenty-minute rescue attempt. Restarting is not the same as giving up; it is how you spend your time on positions that teach something.",
        },
        {
          type: "h2",
          id: "checklist",
          text: "A five-second decision checklist",
        },
        {
          type: "ol",
          items: [
            "Does this move flip a face-down card?",
            "Does it preserve or create a same-suit run?",
            "Does it create an empty column I can use?",
            "Does it bury an Ace or a needed low card?",
            "If not, is a stock deal actually better than waiting?",
          ],
        },
        {
          type: "note",
          text: "**Practice drill:** play a [1-suit game](/spider-solitaire-1-suit) and force yourself to make at least one empty column before the third stock deal. Then repeat on [2 suits](/spider-solitaire-2-suits). The difficulty changes; the spatial habit does not.",
        },
      ],
    },

    zh: {
      metaTitle: "蜘蛛纸牌策略 – 10 个真正有效的技巧",
      metaDescription:
        "用十个实用策略提升蜘蛛纸牌胜率：翻开暗牌、管理空列、推迟发牌、保持花色分离。",
      title: "蜘蛛纸牌策略",
      description:
        "十个实用的蜘蛛纸牌策略，涵盖暗牌、空列、发牌时机、花色分离和收官规划。",
      eyebrow: "策略指南",
      breadcrumb: "策略",
      playHref: "/",
      playLabel: "来一局",
      lead: "蜘蛛纸牌是信息与空间的博弈。开局时你有 44 张背面朝上的牌、五次发牌机会，以及十列已经相当拥挤的牌桌。下面的技巧按它们改变真实对局结果的频率排序，而不是按听起来有多聪明排序。",
      related: [
        {
          href: "/spider-solitaire-rules",
          title: "规则参考",
          description: "先确保牌组和发牌规则已经弄清楚。",
        },
        {
          href: "/spider-solitaire-2-suits",
          title: "双花色指南",
          description: "这些习惯如何用在默认牌桌上。",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "难度对比",
          description: "为什么同样的策略在四花色下感觉完全不同。",
        },
        {
          href: "/spider-solitaire-faq",
          title: "常见问题",
          description: "关于撤销、提示、计分和存档的简短回答。",
        },
      ],
      faq: [
        {
          q: "蜘蛛纸牌最重要的策略是什么？",
          a: "翻开暗牌。每一次翻牌都带来新的信息和新的选择。如果一步棋能翻开暗牌又不会破坏同花色顺子，它通常比一次毫无变化、只是摆得整齐的点数配对更强。",
        },
        {
          q: "应该总是清空一列吗？",
          a: "不必，但空列非常有用。它可以让你安置 K、暂存不完整的顺子、重新整理拥挤的牌桌。在即将发牌时，尽量保留至少一个空列。",
        },
        {
          q: "什么时候该从牌堆发牌？",
          a: "当牌桌上的走法已经用完、这次发牌很可能完成一组顺子，或者你需要新牌来露出被埋住的顺子时再发。不要只因为牌堆能用就发牌，每次发牌都可能埋掉已有的进展。",
        },
        {
          q: "是做长顺子好，还是分散推进好？",
          a: "在保持同花色顺子完整的前提下，把进度分散到整张牌桌。一条很长的顺子当然有用，但获胜需要完成八组。你需要多个花色同时推进，而不是一列样板。",
        },
        {
          q: "撤销能帮我进步吗？",
          a: "能，前提是你用它比较不同选择，而不是赌运气。先走一步，观察新的牌面，如果局面更差就撤回。这才是有意识的练习。",
        },
      ],
      blocks: [
        {
          type: "h2",
          id: "tip-1",
          text: "1. 先翻开暗牌，其他都往后放",
        },
        {
          type: "p",
          text: "暗牌才是真正的对手。一次点数配对如果翻开的暗牌数量没变，对你的局面帮助不大。而一步能露出新牌的移动会带来新的选择，往往还能腾出一个空列。每次发牌前都问自己：*有没有一步能翻开牌？*",
        },
        {
          type: "h2",
          id: "tip-2",
          text: "2. 把空列当作操作空间",
        },
        {
          type: "p",
          text: "空列不只是存放区。它是你重新整理另一列时，唯一能临时安置 K 或长顺子的地方。用一个现成的 K 把每个空列都填满，看起来很有产出，实际上丢掉了灵活性。尽量留一个空位，尤其是在发牌之前。",
        },
        { type: "h2", id: "tip-3", text: "3. 推迟发牌" },
        {
          type: "p",
          text: "牌堆只有五次发牌，每一次都会加入十张你无法选择的牌。当牌桌卡住、这次发牌能完成一组顺子，或者你需要新的点数去够到被埋住的顺子时，再发牌。不要只因为每列都有牌就发。",
        },
        {
          type: "p",
          text: "一个有用的发牌前检查清单：没有一步能翻牌、没有一步能清空列、也没有任何同花色顺子可以延长。如果三条都成立，发牌就是合理的。",
        },
        {
          type: "h2",
          id: "tip-4",
          text: "4. 让同花色顺子保持完整",
        },
        {
          type: "p",
          text: "同花色顺子是唯一能整体移动的牌组。在双花色和四花色对局中，花色纯粹就是未来的机动性。当两种走法带来相同的点数进展时，选那个能让同一花色保持在一起的。花色混杂的一叠也许看着整齐，却可能让整列后面卡死。",
        },
        { type: "h2", id: "tip-5", text: "5. 不要把低点数牌埋住" },
        {
          type: "p",
          text: "A 和 2 很容易被盖住，因为很多牌都能合法地压在上面。但没有 A，一组顺子就永远无法完成。盖住一张低点数牌之前，先确认之后还能不能把它露出来；如果不能，就为你正在移动的牌换个地方。",
        },
        {
          type: "h2",
          id: "tip-6",
          text: "6. 有意识地朝 K 搭建",
        },
        {
          type: "p",
          text: "完整的顺子从 K 开始。如果 K 被埋住，把它解放出来应该是中期目标。如果 K 已经露在外面，你就有了顺子的基础：保护好它周围的空间，在花色配合的时候把递减的牌喂上去。",
        },
        {
          type: "h2",
          id: "tip-7",
          text: "7. 拖动牌组前先看清花色",
        },
        {
          type: "p",
          text: "这听起来是废话，直到快节奏的对局让它变成本能。移动多张牌之前，从上到下把花色读一遍。如果花色是交替的，能移动的只有最上面那张。很多失误都来自一眼看去以为某一列是同花色顺子。",
        },
        {
          type: "h2",
          id: "tip-8",
          text: "8. 把提示当参考，而不是神谕",
        },
        {
          type: "p",
          text: "提示按钮会高亮一步合法移动，但它不会评估长期价值。卡住的时候，或者想确认某个牌组能不能移动时可以用它，然后再结合牌面判断这个建议。合法的一步也可能是糟糕的一步。",
        },
        { type: "h2", id: "tip-9", text: "9. 为最后两次发牌做计划" },
        {
          type: "p",
          text: "到了对局后期，牌堆就是一条截止线。当只剩两次发牌时，就该开始想哪些花色接近完成、哪些列还在挡路。用最后的发牌去补缺口，而不是去探索牌面。",
        },
        { type: "h2", id: "tip-10", text: "10. 知道什么时候该重开" },
        {
          type: "p",
          text: "随机发牌并非每局都能赢，四花色尤其如此。如果牌堆已经用完、同花色顺子毫无进展、每一列都被堵住，那么开一局新的比花二十分钟抢救更值得练习。重开不等于放弃，它只是把时间花在能教你东西的局面上。",
        },
        {
          type: "h2",
          id: "checklist",
          text: "五秒钟决策清单",
        },
        {
          type: "ol",
          items: [
            "这一步能翻开一张暗牌吗？",
            "它能保住或形成一组同花色顺子吗？",
            "它能给我一个可用的空列吗？",
            "它会不会把 A 或某张关键的低点数牌埋住？",
            "如果都不能，那么发一次牌真的比继续等更好吗？",
          ],
        },
        {
          type: "note",
          text: "**练习方案：** 打一局[单花色](/spider-solitaire-1-suit)，要求自己在第三次发牌之前至少清出一个空列。然后换到[双花色](/spider-solitaire-2-suits)重复一次。难度会变，空间感的习惯不会变。",
        },
      ],
    },

    ja: {
      metaTitle: "スパイダーソリティア攻略 – 効く10のコツ",
      metaDescription:
        "スパイダーソリティアの勝率を上げる10の実践的な戦略。裏向きのカードをめくる、空列を管理する、配布を遅らせる、スートを分けて保つ。",
      title: "スパイダーソリティア攻略",
      description:
        "裏向きのカード、空列、山札のタイミング、スートの分離、終盤の計画まで、実践的な10の戦略を解説します。",
      eyebrow: "攻略ガイド",
      breadcrumb: "攻略",
      playHref: "/",
      playLabel: "ゲームを始める",
      lead: "スパイダーソリティアは情報とスペースのゲームです。開始時には裏向きのカードが44枚、配布が5回、そしてすでに混み合った10列があります。以下のコツは、実際のゲームの結果を変える頻度の高い順に並べました。賢そうに聞こえる順ではありません。",
      related: [
        {
          href: "/spider-solitaire-rules",
          title: "ルールリファレンス",
          description: "まずグループと配布のルールを確認しましょう。",
        },
        {
          href: "/spider-solitaire-2-suits",
          title: "2スートガイド",
          description: "これらの習慣をデフォルトのテーブルでどう使うか。",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "難易度の比較",
          description: "同じ戦略が4スートで違って感じられる理由。",
        },
        {
          href: "/spider-solitaire-faq",
          title: "よくある質問",
          description:
            "元に戻す、ヒント、スコア、保存されたゲームについての短い回答。",
        },
      ],
      faq: [
        {
          q: "スパイダーソリティアで最も重要な戦略は何ですか？",
          a: "裏向きのカードをめくることです。めくるたびに情報と選択肢が増えます。同スートのランを壊さずに裏向きのカードを表にできるなら、何も変わらないきれいなランク合わせより、たいていその手のほうが強いです。",
        },
        {
          q: "いつも列を空にするべきですか？",
          a: "いいえ。ただし空列は強力です。Kを移したり、途中のランを一時的に置いたり、混み合った場を整理したりできます。配布が近いときは、空列を少なくとも1つ確保しておきましょう。",
        },
        {
          q: "いつ山札から配るべきですか？",
          a: "場の手が尽きたとき、配布でランが完成しそうなとき、埋もれたランを露出させるために新しいカードが必要なときです。山札が使えるという理由だけで配るのは避けましょう。配布は進行を埋めてしまうことがあります。",
        },
        {
          q: "長いランを作るほうが良いですか、それとも分散させるべきですか？",
          a: "同スートのランを保ちながら、場全体に進行を分散させましょう。非常に長いランは役立ちますが、勝利には8本の完成が必要です。見せ場の1列ではなく、複数のスートを同時に進める必要があります。",
        },
        {
          q: "元に戻すは上達に役立ちますか？",
          a: "はい。運の良い結果を探すのではなく、選択肢を比べるために使う場合です。手を試し、新しい盤面を観察し、悪くなっていれば戻します。それが意図的な練習です。",
        },
      ],
      blocks: [
        {
          type: "h2",
          id: "tip-1",
          text: "1. 何よりも先に裏向きのカードをめくる",
        },
        {
          type: "p",
          text: "本当の相手は裏向きのカードです。めくれる枚数が変わらないランク合わせは、局面をあまり改善しません。新しいカードを露出させる手は選択肢を増やし、多くの場合さらに空列も生みます。配布の前に必ず自問しましょう。*何かをめくれる手はあるか？*",
        },
        {
          type: "h2",
          id: "tip-2",
          text: "2. 空列は作業スペースとして扱う",
        },
        {
          type: "p",
          text: "空列は単なる保管場所ではありません。別の列を整理する間、Kや長いランを一時的に置ける唯一の場所です。目についたKで空列をすべて埋めると生産的に見えますが、柔軟性を失います。特に配布の前は、1つは空けておきましょう。",
        },
        { type: "h2", id: "tip-3", text: "3. 配布を遅らせる" },
        {
          type: "p",
          text: "山札は5回分だけで、1回ごとに自分で選べない10枚が加わります。場が行き詰まったとき、配布でランが完成するとき、埋もれたランに届くために新しいランクが必要なときに配りましょう。各列にカードがあるという理由だけで配ってはいけません。",
        },
        {
          type: "p",
          text: "配布前のチェックリストとして便利です。カードをめくれる手がない、列を空にできる手がない、延長できる同スートのランもない。3つすべてに当てはまるなら、配布は妥当です。",
        },
        {
          type: "h2",
          id: "tip-4",
          text: "4. 同スートのランをまとめて保つ",
        },
        {
          type: "p",
          text: "同スートのランだけがまとめて動かせるグループです。2スートや4スートのゲームでは、スートの純粋さが将来の機動性になります。2つの手が同じランクの進行をもたらすなら、1つのスートをまとめて保てるほうを選びましょう。混ざった山はきれいに見えても、後で列全体を止めてしまうことがあります。",
        },
        { type: "h2", id: "tip-5", text: "5. 低いカードを埋めない" },
        {
          type: "p",
          text: "Aと2は多くのカードが合法に乗せられるため、覆われやすいカードです。しかしAに届かなければランは完成しません。低いカードを覆う前に、あとで露出できるかを確認しましょう。できないなら、動かすカードを別の場所に置きます。",
        },
        {
          type: "h2",
          id: "tip-6",
          text: "6. Kを意識して積み上げる",
        },
        {
          type: "p",
          text: "完全なランはKから始まります。Kが埋もれているなら、解放することが中期的な目標になります。Kがすでに表に出ているなら、ランの土台があります。周囲のスペースを守り、スートが噛み合うときに降順のカードを載せていきましょう。",
        },
        {
          type: "h2",
          id: "tip-7",
          text: "7. グループをドラッグする前にスートを読む",
        },
        {
          type: "p",
          text: "当たり前に聞こえますが、速いゲームでは反射になるまで気づけません。複数のカードを動かす前に、上から下までスートを読みます。スートが交互なら、動くのは一番上だけです。一目見て同スートのランに見えた、という勘違いから多くのミスが生まれます。",
        },
        {
          type: "h2",
          id: "tip-8",
          text: "8. ヒントは神託ではなく第二の意見として使う",
        },
        {
          type: "p",
          text: "ヒントボタンは合法手を強調するだけで、長期的な価値を評価しません。行き詰まったときや、グループが動かせるか確認したいときに使い、提案を盤面と照らし合わせて判断します。合法手が悪手であることもあります。",
        },
        { type: "h2", id: "tip-9", text: "9. 最後の2回の配布を計画する" },
        {
          type: "p",
          text: "終盤では山札が締め切りになります。残り2回になったら、どのスートが完成に近いか、どの列がまだ邪魔をしているかを考え始めましょう。最後の配布は盤面を探るためではなく、隙間を埋めるために使います。",
        },
        { type: "h2", id: "tip-10", text: "10. いつやり直すべきかを知る" },
        {
          type: "p",
          text: "ランダムな配布は、特に4スートではすべてが勝てるわけではありません。山札が尽き、同スートのランが進まず、すべての列が詰まっているなら、20分かけて救出するより新しいゲームのほうが練習になります。やり直しは諦めとは違い、何かを学べる局面に時間を使うことです。",
        },
        {
          type: "h2",
          id: "checklist",
          text: "5秒でできる判断チェックリスト",
        },
        {
          type: "ol",
          items: [
            "この手で裏向きのカードがめくれるか？",
            "同スートのランを保てるか、新しく作れるか？",
            "使える空列ができるか？",
            "Aや必要な低いカードを埋めてしまわないか？",
            "どれも違うなら、待つより配布したほうが本当に良いか？",
          ],
        },
        {
          type: "note",
          text: "**練習ドリル：** [1スートのゲーム](/spider-solitaire-1-suit)をプレイし、3回目の配布までに空列を少なくとも1つ作るよう自分に課します。次に[2スート](/spider-solitaire-2-suits)で繰り返しましょう。難易度は変わっても、空間を読む習慣は変わりません。",
        },
      ],
    },
  },
};
