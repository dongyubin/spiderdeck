import type { PageDefinition } from "../types";

export const faqPage: PageDefinition = {
  slug: "spider-solitaire-faq",
  contents: {
    en: {
      metaTitle: "Spider Solitaire FAQ – Common Questions Answered",
      metaDescription:
        "Answers to common Spider Solitaire questions: rules, difficulty, dealing, undo, hints, scoring, saved games, mobile play, and offline access.",
      title: "Spider Solitaire FAQ",
      description:
        "Frequently asked questions about Spider Solitaire rules, difficulty, dealing, undo, hints, scoring, saved games, and browser support.",
      eyebrow: "Questions and answers",
      breadcrumb: "FAQ",
      lead: "Short answers to the questions that come up most often. If you need the full wording of a rule, use the [rules reference](/spider-solitaire-rules); if you are learning the game for the first time, start with [how to play](/how-to-play).",
      playHref: "/",
      playLabel: "Play Spider Solitaire",
      related: [
        {
          href: "/how-to-play",
          title: "How to Play",
          description: "The complete beginner walkthrough.",
        },
        {
          href: "/spider-solitaire-rules",
          title: "Rules Reference",
          description: "Precise rules and edge cases.",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "Strategy Guide",
          description: "Ten tips for better board decisions.",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "Difficulty Comparison",
          description: "1 suit vs 2 suits vs 4 suits.",
        },
      ],
      faq: [
        {
          q: "Is Spider Solitaire free here?",
          a: "Yes. The game is free to play in the browser. There is no account, subscription, or in-game purchase. The table does not contain ads.",
        },
        {
          q: "What is the difference between 1, 2, and 4 suits?",
          a: "The number of suits in the 104-card deck. One suit is easiest and best for learning, two suits is the balanced default, and four suits is the expert version. The tableau size, five stock deals, and eight-run goal stay the same.",
        },
        {
          q: "How do you win Spider Solitaire?",
          a: "Build eight complete King-to-Ace sequences in a single suit. Each completed sequence clears automatically to the foundation. Clear all eight to win.",
        },
        {
          q: "Can I put any card on any other card?",
          a: "A single card can go on the next-higher rank regardless of suit. A group of two or more cards moves only when the entire group is a same-suit descending run.",
        },
        {
          q: "Why can't I deal from the stock?",
          a: "Every column must have at least one card. Fill the empty column first. The stock is also disabled when it is empty or the game has ended.",
        },
        {
          q: "Do completed runs clear automatically?",
          a: "Yes. When a same-suit King-to-Ace sequence forms in a column, it moves to the foundation without any extra click. The card underneath flips face up if needed.",
        },
        {
          q: "Is undo limited?",
          a: "No. Undo is unlimited. It can also reverse a losing position, so you can back out of a dead-end move. It cannot undo a win.",
        },
        {
          q: "Are hints always the best move?",
          a: "No. A hint highlights a legal move, not the strongest move. Use it when you are stuck or to confirm that a group can move, then judge the suggestion against the whole board.",
        },
        {
          q: "How is the game scored?",
          a: "There is no points score. The game tracks moves, elapsed time, and win/loss statistics for each difficulty. Fewer moves and a faster time are the natural comparisons.",
        },
        {
          q: "Does my game save if I close the tab?",
          a: "Yes, in normal browsing. The current game, settings, and statistics are stored in your browser's local storage. Clearing site data or using private browsing can remove them.",
        },
        {
          q: "Is there a daily challenge?",
          a: "Not currently. Every new game uses a fresh random deal. There is no shared daily seed or leaderboard.",
        },
        {
          q: "Can I play offline?",
          a: "Offline play is not guaranteed. The game is a website and may need a network connection to load. A browser cache might cover a temporary dropout, but that is not a supported offline mode.",
        },
        {
          q: "Does the game work on a phone?",
          a: "Yes. The ten-column board scales to the screen, cards use a compact rank-and-suit face on narrow displays, and you can move cards by tapping or dragging.",
        },
        {
          q: "Is this the same as Windows Spider Solitaire?",
          a: "The rules are based on standard Spider Solitaire, but this is an independent browser game. It is not affiliated with Microsoft or the Windows Solitaire app.",
        },
        {
          q: "Where can I learn the rules?",
          a: "Start with the how-to-play walkthrough, then use the rules reference for precise edge cases. The strategy guide covers board decisions after the basics.",
        },
      ],
      blocks: [
        { type: "h2", id: "rules-questions", text: "Rules and gameplay" },
        {
          type: "p",
          text: "The most common confusion is the difference between a single card and a group. A single card can move onto any suit of the next-higher rank. A group must be a same-suit descending run. The second most common issue is the stock: it is disabled while any column is empty. Both rules are covered in detail in the [rules reference](/spider-solitaire-rules).",
        },
        {
          type: "p",
          text: "Completed runs clear automatically. You do not need to move a King to a foundation slot or click a special button. A mixed-suit sequence does not count, even if the ranks are in order.",
        },
        { type: "h2", id: "difficulty-questions", text: "Difficulty and challenge" },
        {
          type: "p",
          text: "One suit is the easiest mode, two suits is the recommended middle, and four suits is the expert version. The deck always contains 104 cards; only the suit distribution changes. See the [difficulty guide](/spider-solitaire-difficulty-levels) for deck composition and a progression plan.",
        },
        { type: "h2", id: "site-questions", text: "The site and your data" },
        {
          type: "p",
          text: "There is no account, no email collection, and no server-side game history. Your current game and statistics live in browser local storage. The game is free and does not show ads inside the table. For browser requirements and offline limits, read the [no-download guide](/spider-solitaire-no-download).",
        },
        {
          type: "p",
          text: "The table is designed to work on phones as well as desktops. If the controls feel unfamiliar on a touch screen, the [mobile guide](/spider-solitaire-mobile) explains tap-to-move and dragging.",
        },
      ],
    },

    zh: {
      metaTitle: "蜘蛛纸牌常见问题 – 疑问一次解答",
      metaDescription:
        "蜘蛛纸牌常见问题解答：规则、难度、发牌、撤销、提示、计分、存档、手机游玩和离线访问。",
      title: "蜘蛛纸牌常见问题",
      description:
        "关于蜘蛛纸牌规则、难度、发牌、撤销、提示、计分、存档和浏览器支持的常见问答。",
      eyebrow: "问题与解答",
      breadcrumb: "常见问题",
      lead: "这里用简短的回答覆盖最常被问到的疑问。需要某条规则的完整表述，请使用[规则速查](/spider-solitaire-rules)；如果是第一次接触这款游戏，请先从[玩法说明](/how-to-play)开始。",
      playHref: "/",
      playLabel: "开始玩蜘蛛纸牌",
      related: [
        {
          href: "/how-to-play",
          title: "玩法说明",
          description: "完整的入门教程。",
        },
        {
          href: "/spider-solitaire-rules",
          title: "规则速查",
          description: "精确的规则与边界情况。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "策略指南",
          description: "改善牌桌决策的十个建议。",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "难度对比",
          description: "单花色、双花色与四花色。",
        },
      ],
      faq: [
        {
          q: "这里的蜘蛛纸牌免费吗？",
          a: "免费。游戏可在浏览器中免费游玩，没有账号、订阅或内购，牌桌内也不会出现广告。",
        },
        {
          q: "单花色、双花色和四花色有什么区别？",
          a: "区别在于 104 张牌中所用的花色数量。单花色最简单，最适合入门；双花色是平衡的默认模式；四花色则是专家版本。牌桌规模、五次发牌和完成八组顺子的目标都不变。",
        },
        {
          q: "蜘蛛纸牌怎么才算赢？",
          a: "在同一花色中搭出八组从 K 到 A 的完整顺子。每完成一组会自动清到基础区，八组全部清完即获胜。",
        },
        {
          q: "可以把任意一张牌放到任意一张牌上吗？",
          a: "单张牌可以放到点数大一位的牌上，不限花色。两张以上的牌组只有在整体构成同花色递减顺子时才能一起移动。",
        },
        {
          q: "为什么我无法从牌堆发牌？",
          a: "每一列都必须至少有一张牌，请先补上空列。牌堆为空或本局已结束时，发牌同样不可用。",
        },
        {
          q: "完成的顺子会自动清走吗？",
          a: "会。当一列中出现同花色从 K 到 A 的连续牌组时，它会自动移到基础区，无需额外点击。下面的牌会按需翻开。",
        },
        {
          q: "撤销次数有限制吗？",
          a: "没有。撤销不限次数，还能退回一个必败的局面，让你从死路中走出来，但无法撤销已经取得的胜利。",
        },
        {
          q: "提示给出的总是最佳的一步吗？",
          a: "不是。提示只标出一个合法移动，而不是最强的一步。卡住时可以用它，或用来确认某组牌能否移动，然后再结合整张牌桌判断这个建议。",
        },
        {
          q: "游戏如何计分？",
          a: "没有分数。游戏会记录步数、用时，以及各难度的胜负统计。步数更少、用时更短就是最自然的比较方式。",
        },
        {
          q: "关闭标签页后对局会保存吗？",
          a: "在正常浏览模式下会。当前对局、设置和统计都保存在浏览器本地存储中。清除站点数据或使用无痕模式可能会让它们消失。",
        },
        {
          q: "有每日挑战吗？",
          a: "目前没有。每局新游戏都是全新随机发牌，没有共享的每日牌局或排行榜。",
        },
        {
          q: "可以离线玩吗？",
          a: "不保证能离线玩。游戏是一个网站，加载时可能需要网络连接。浏览器缓存也许能应付短暂的断网，但这不是受支持的离线模式。",
        },
        {
          q: "手机上能玩吗？",
          a: "可以。十列牌桌会随屏幕缩放，窄屏下牌面使用紧凑的点数与花色样式，点按或拖动都能移动牌。",
        },
        {
          q: "这和 Windows 上的蜘蛛纸牌一样吗？",
          a: "规则基于标准蜘蛛纸牌，但这是一个独立的浏览器游戏，与微软或 Windows 纸牌应用没有任何关联。",
        },
        {
          q: "在哪里可以学规则？",
          a: "先看玩法入门，再用规则速查处理具体的边界情况。掌握基础之后的牌桌决策，策略指南里有完整讲解。",
        },
      ],
      blocks: [
        { type: "h2", id: "rules-questions", text: "规则与玩法" },
        {
          type: "p",
          text: "最常让人困惑的是单张牌与牌组的区别：单张牌可以移到点数大一位的任何花色上，而牌组必须是同花色的递减顺子。第二常见的问题是牌堆——只要有一列是空的，就无法发牌。这两条规则在[规则速查](/spider-solitaire-rules)中都有详细说明。",
        },
        {
          type: "p",
          text: "完成的顺子会自动清走，你不需要把 K 移到基础区，也不用点任何特殊按钮。花色混合的连续牌组不算完成，即使点数顺序正确也不行。",
        },
        { type: "h2", id: "difficulty-questions", text: "难度与挑战" },
        {
          type: "p",
          text: "单花色是最简单的模式，双花色是推荐的中等难度，四花色则是专家版本。牌组始终是 104 张，变化的只是花色分布。牌组构成和进阶路线见[难度指南](/spider-solitaire-difficulty-levels)。",
        },
        { type: "h2", id: "site-questions", text: "本站与你的数据" },
        {
          type: "p",
          text: "这里没有账号、不收集邮箱，也没有服务器端的对局记录。当前对局和统计数据都保存在浏览器本地存储中。游戏免费，牌桌内不显示广告。关于浏览器要求和离线限制，请阅读[免下载指南](/spider-solitaire-no-download)。",
        },
        {
          type: "p",
          text: "牌桌同时为手机和桌面端设计。如果在触屏上觉得操作陌生，[手机版指南](/spider-solitaire-mobile)会讲解点按移动和拖动。",
        },
      ],
    },

    ja: {
      metaTitle: "スパイダーソリティア FAQ – よくある質問と回答",
      metaDescription:
        "スパイダーソリティアのよくある質問に回答します。ルール、難易度、配布、元に戻す、ヒント、スコア、セーブ、スマホでのプレイ、オフライン利用まで。",
      title: "スパイダーソリティア FAQ",
      description:
        "スパイダーソリティアのルール、難易度、配布、元に戻す、ヒント、スコア、セーブデータ、ブラウザ対応に関するよくある質問。",
      eyebrow: "質問と回答",
      breadcrumb: "FAQ",
      lead: "よく出てくる疑問に短く答えます。ルールの正確な文言が必要なら[ルール早見表](/spider-solitaire-rules)を、初めてこのゲームを覚えるなら[遊び方](/how-to-play)から始めてください。",
      playHref: "/",
      playLabel: "スパイダーソリティアをプレイ",
      related: [
        {
          href: "/how-to-play",
          title: "遊び方",
          description: "初心者向けの完全ガイド。",
        },
        {
          href: "/spider-solitaire-rules",
          title: "ルール早見表",
          description: "正確なルールと例外。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "攻略ガイド",
          description: "盤面判断を良くする10のコツ。",
        },
        {
          href: "/spider-solitaire-difficulty-levels",
          title: "難易度の比較",
          description: "1スート・2スート・4スートの違い。",
        },
      ],
      faq: [
        {
          q: "ここのスパイダーソリティアは無料ですか？",
          a: "はい。ブラウザで無料で遊べます。アカウントもサブスクリプションも課金要素もなく、テーブル内に広告も表示されません。",
        },
        {
          q: "1スート・2スート・4スートの違いは何ですか？",
          a: "104枚のデッキに含まれるスートの数です。1スートが最も簡単で学習向け、2スートがバランスの取れたデフォルト、4スートが上級者向けです。場の広さ、5回の配布、8つのランを完成させる目標は変わりません。",
        },
        {
          q: "スパイダーソリティアの勝利条件は？",
          a: "同じスートでKからAまでの連続したランを8組作ります。完成したランは自動的にファウンデーションへ送られ、8組すべてを揃えれば勝利です。",
        },
        {
          q: "どのカードの上にでも置けますか？",
          a: "1枚のカードはスートを問わず、1つ上のランクのカードに置けます。2枚以上のグループは、全体が同スートの降順のランである場合のみまとめて動かせます。",
        },
        {
          q: "山札から配れないのはなぜですか？",
          a: "すべての列に最低1枚のカードが必要です。まず空列を埋めてください。山札が空のときやゲームが終了したときも配れません。",
        },
        {
          q: "完成したランは自動で片付きますか？",
          a: "はい。列の中に同スートでKからAまでのランができると、追加のクリックなしでファウンデーションへ移動します。必要に応じて下のカードは表向きになります。",
        },
        {
          q: "元に戻す回数に制限はありますか？",
          a: "ありません。元に戻すは無制限です。負けが確定した局面からも戻れるので、行き詰まった手から抜け出せます。ただし勝利を取り消すことはできません。",
        },
        {
          q: "ヒントは常に最善手ですか？",
          a: "いいえ。ヒントが示すのは合法手であり、最善手ではありません。行き詰まったときやグループが動かせるかの確認に使い、提案は盤面全体と照らし合わせて判断してください。",
        },
        {
          q: "スコアはどのように計算されますか？",
          a: "ポイント制のスコアはありません。手数、経過時間、難易度ごとの勝敗を記録します。手数が少なく時間が短いほど良い、というのが自然な比較になります。",
        },
        {
          q: "タブを閉じてもゲームは保存されますか？",
          a: "通常のブラウジングでは保存されます。現在のゲーム、設定、統計はブラウザのローカルストレージに保存され、サイトデータの消去やプライベートブラウズで失われることがあります。",
        },
        {
          q: "デイリーチャレンジはありますか？",
          a: "現在はありません。新しいゲームは毎回ランダムな配布で、共通のデイリーシードやランキングはありません。",
        },
        {
          q: "オフラインでも遊べますか？",
          a: "オフラインプレイは保証されません。ゲームはウェブサイトなので、読み込みにネットワーク接続が必要な場合があります。ブラウザキャッシュで一時的な切断をしのげることはありますが、正式なオフラインモードではありません。",
        },
        {
          q: "スマホでも動きますか？",
          a: "はい。10列の盤面は画面に合わせて縮み、狭い画面ではカードがランクとスートだけのコンパクト表示になります。タップでもドラッグでもカードを動かせます。",
        },
        {
          q: "Windows のスパイダーソリティアと同じですか？",
          a: "ルールは標準的なスパイダーソリティアに基づいていますが、これは独立したブラウザゲームです。Microsoft や Windows のソリティアアプリとは関係ありません。",
        },
        {
          q: "ルールはどこで学べますか？",
          a: "まずは遊び方のチュートリアルを読み、細かい例外はルール早見表で確認してください。基本を覚えた後の盤面判断は攻略ガイドで扱っています。",
        },
      ],
      blocks: [
        { type: "h2", id: "rules-questions", text: "ルールと遊び方" },
        {
          type: "p",
          text: "よくある混乱は、1枚のカードとグループの違いです。1枚のカードはスートを問わず1つ上のランクへ動かせます。グループは同スートの降順のランでなければまとめて動かせません。次に多いのが山札で、いずれかの列が空の間は配れません。どちらのルールも[ルール早見表](/spider-solitaire-rules)で詳しく説明しています。",
        },
        {
          type: "p",
          text: "完成したランは自動で片付きます。キングをファウンデーションのスロットへ動かしたり、専用のボタンを押したりする必要はありません。ランクが順番でも、スートが混ざった並びは完成とみなされません。",
        },
        { type: "h2", id: "difficulty-questions", text: "難易度とチャレンジ" },
        {
          type: "p",
          text: "1スートが最も簡単なモード、2スートが推奨される中間、4スートが上級版です。デッキは常に104枚で、変わるのはスートの配分だけです。デッキ構成と上達の順序は[難易度ガイド](/spider-solitaire-difficulty-levels)をご覧ください。",
        },
        { type: "h2", id: "site-questions", text: "サイトとデータについて" },
        {
          type: "p",
          text: "アカウントもメール収集も、サーバー側の対戦履歴もありません。現在のゲームと統計はブラウザのローカルストレージにあります。ゲームは無料で、テーブル内に広告は表示されません。ブラウザの要件とオフラインの制限は[ダウンロード不要ガイド](/spider-solitaire-no-download)をお読みください。",
        },
        {
          type: "p",
          text: "テーブルはデスクトップだけでなくスマホでも動くよう設計されています。タッチ画面で操作に慣れない場合は、[モバイルガイド](/spider-solitaire-mobile)でタップ移動とドラッグを説明しています。",
        },
      ],
    },
  },
};
