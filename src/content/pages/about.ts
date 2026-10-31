import type { PageDefinition } from "../types";

export const aboutPage: PageDefinition = {
  slug: "about",
  contents: {
    en: {
      metaTitle: "About This Spider Solitaire Site",
      metaDescription:
        "About SpiderDeck: a free, independent Spider Solitaire site with 1-, 2-, and 4-suit tables, local stats, no accounts, and no ads.",
      title: "About SpiderDeck",
      description:
        "About SpiderDeck, an independent free browser Spider Solitaire site with 1, 2, and 4-suit tables, local statistics, and no accounts or ads.",
      eyebrow: "About the site",
      breadcrumb: "About",
      playHref: "/",
      playLabel: "Play Spider Solitaire",
      lead: "SpiderDeck is a small, independent browser game site built around one idea: open a link and play a clean game of Spider Solitaire without an account, a download, or a lobby full of distractions.",
      related: [
        {
          href: "/guides",
          title: "Guides",
          description: "Rules, strategy, difficulty, and mobile help.",
        },
        {
          href: "/credits",
          title: "Credits",
          description: "Engine and card artwork licenses.",
        },
        {
          href: "/spider-solitaire-2-suits",
          title: "2-Suit Table",
          description: "The default mode and why it is recommended.",
        },
        {
          href: "/spider-solitaire-faq",
          title: "FAQ",
          description: "Answers about saving, scoring, and offline play.",
        },
      ],
      blocks: [
        { type: "h2", id: "what", text: "What this site is" },
        {
          type: "p",
          text: "SpiderDeck is a free Spider Solitaire website. It includes 1-suit, 2-suit, and 4-suit tables, unlimited undo, hints, per-difficulty statistics, and a responsive board that works on phones, tablets, and desktops. Two suits is the default mode because it is the most balanced everyday challenge.",
        },
        {
          type: "p",
          text: "The site does not have accounts, cloud sync, ads inside the table, or a daily challenge. An unfinished game and your statistics are stored locally in your browser. Nothing is tied to an email address or a profile.",
        },
        { type: "h2", id: "why", text: "Why it exists" },
        {
          type: "p",
          text: "Many free solitaire pages load a small game inside a large page full of banners, sidebars, and autoplay video. Others require an app install or a sign-up before the first card appears. This site is an attempt at the opposite: the game is the first thing on the page, the controls are visible, and the reading material sits below the table where it does not interrupt play.",
        },
        {
          type: "p",
          text: "The same layout is served to every device. Instead of hiding the game behind a desktop-only notice, the board scales and cards simplify on narrow screens. That makes the site usable on a phone without maintaining a separate mobile app.",
        },
        { type: "h2", id: "built", text: "How it is built" },
        {
          type: "p",
          text: "The game is a static web application built with Next.js and React. The Spider Solitaire engine comes from the open-source [Time2Code0/spider-solitaire](https://github.com/Time2Code0/spider-solitaire) project under the MIT license. The card table, responsive layout, routing, content, metadata, and site design were adapted for this site.",
        },
        {
          type: "p",
          text: "The static build is designed for simple hosting. There is no database, no login service, and no API that stores gameplay. Card artwork is served as SVG files, and the game state is handled entirely in the browser.",
        },
        { type: "h2", id: "rules", text: "Rules and editorial approach" },
        {
          type: "p",
          text: "The rules described on this site are the standard Spider Solitaire rules used by the table: ten columns, 104 cards, five stock deals, same-suit group moves, any-card empty columns, and automatic King-to-Ace foundation clears. House-rule variants are noted where they could cause confusion.",
        },
        {
          type: "p",
          text: "This site is not affiliated with Microsoft, Windows Solitaire, or any other commercial solitaire product. “Spider Solitaire” is the name of a traditional card game; the implementation and written content here are independent.",
        },
        { type: "h2", id: "limits", text: "What the site does not do" },
        {
          type: "ul",
          items: [
            "No user accounts, email list, or cloud-saved games.",
            "No real-money gambling, prizes, or tournament entry.",
            "No guaranteed offline mode or installed app.",
            "No daily challenge or shared leaderboard.",
            "No claim to be an “official” Spider Solitaire product.",
          ],
        },
        { type: "h2", id: "credits-link", text: "Credits and licenses" },
        {
          type: "p",
          text: "The engine and card artwork come from open-source and public-domain projects. The exact attributions are listed on the [credits page](/credits). If you are looking for the rules, start with [how to play](/how-to-play); if you want to improve, read the [strategy guide](/spider-solitaire-strategy).",
        },
      ],
    },

    zh: {
      metaTitle: "关于这个蜘蛛纸牌网站",
      metaDescription:
        "关于 SpiderDeck：一个免费、独立的蜘蛛纸牌网站，提供单花色、双花色和四花色牌桌，本地统计，无账号、无广告。",
      title: "关于 SpiderDeck",
      description:
        "关于 SpiderDeck：一个独立的免费浏览器蜘蛛纸牌网站，提供单花色、双花色和四花色牌桌、本地统计，没有账号，也没有广告。",
      eyebrow: "关于本站",
      breadcrumb: "关于",
      playHref: "/",
      playLabel: "玩蜘蛛纸牌",
      lead: "SpiderDeck 是一个小而独立的浏览器游戏网站，只围绕一个想法：打开一个链接，就能玩一局干净利落的蜘蛛纸牌——不用账号、不用下载，也没有塞满干扰的大厅。",
      related: [
        {
          href: "/guides",
          title: "指南",
          description: "规则、策略、难度和手机端帮助。",
        },
        {
          href: "/credits",
          title: "鸣谢",
          description: "引擎与牌面美术的许可信息。",
        },
        {
          href: "/spider-solitaire-2-suits",
          title: "双花色牌桌",
          description: "默认模式，以及为什么推荐它。",
        },
        {
          href: "/spider-solitaire-faq",
          title: "常见问题",
          description: "关于存档、计分和离线游玩的解答。",
        },
      ],
      blocks: [
        { type: "h2", id: "what", text: "这个网站是什么" },
        {
          type: "p",
          text: "SpiderDeck 是一个免费的蜘蛛纸牌网站。它提供单花色、双花色和四花色牌桌，无限撤销、提示、按难度划分的统计，以及适配手机、平板和桌面的响应式牌桌。默认模式是双花色，因为它是日常挑战中最平衡的一种。",
        },
        {
          type: "p",
          text: "网站没有账号、云同步、牌桌内广告，也没有每日挑战。未完成的对局和你的统计数据都保存在浏览器本地，不与任何邮箱或用户档案绑定。",
        },
        { type: "h2", id: "why", text: "为什么做这个网站" },
        {
          type: "p",
          text: "许多免费纸牌页面把一个小小的游戏塞进满是横幅、侧边栏和自动播放视频的大页面里；还有一些在你看到第一张牌之前就要求安装应用或注册。这个网站想做的恰好相反：游戏是页面上的第一样东西，操作按钮清晰可见，阅读内容放在牌桌下方，不会打断游玩。",
        },
        {
          type: "p",
          text: "所有设备都使用同一套布局。我们没有用仅限桌面的提示把游戏藏起来，而是让牌桌随屏幕缩放、在窄屏上简化卡牌。这样无需额外维护一个手机应用，网站也能在手机上正常使用。",
        },
        { type: "h2", id: "built", text: "网站如何构建" },
        {
          type: "p",
          text: "游戏是用 Next.js 和 React 构建的静态 Web 应用。蜘蛛纸牌引擎来自 MIT 许可的开源项目 [Time2Code0/spider-solitaire](https://github.com/Time2Code0/spider-solitaire)。牌桌、响应式布局、路由、内容、元数据和站点设计都为本站做了调整。",
        },
        {
          type: "p",
          text: "静态构建专为简单托管而设计：没有数据库、没有登录服务，也没有存储游戏过程的 API。牌面以 SVG 文件提供，游戏状态完全在浏览器中处理。",
        },
        { type: "h2", id: "rules", text: "规则与编辑原则" },
        {
          type: "p",
          text: "本站描述的规则就是牌桌实际采用的标准蜘蛛纸牌规则：十列、104 张牌、五次发牌、同花色牌组移动、任意牌都可放入空列，以及从 K 到 A 的顺子自动清入基础区。对于可能造成混淆的地方，我们会注明常见的自定规则差异。",
        },
        {
          type: "p",
          text: "本站与 Microsoft、Windows 纸牌或任何其他商业纸牌产品均无关联。Spider Solitaire（蜘蛛纸牌）是一种传统纸牌游戏的名称；此处的实现与文字内容均为独立创作。",
        },
        { type: "h2", id: "limits", text: "本站不做什么" },
        {
          type: "ul",
          items: [
            "没有用户账号、邮件列表或云端存档。",
            "不涉及真钱赌博、奖品或锦标赛报名。",
            "不提供保证可用的离线模式或已安装应用。",
            "没有每日挑战，也没有共享排行榜。",
            "不声称自己是官方蜘蛛纸牌产品。",
          ],
        },
        { type: "h2", id: "credits-link", text: "鸣谢与许可" },
        {
          type: "p",
          text: "引擎和牌面美术来自开源与公有领域项目，具体署名列在[鸣谢页面](/credits)。如果你想找规则，请从[玩法说明](/how-to-play)开始；如果想提升水平，请阅读[策略指南](/spider-solitaire-strategy)。",
        },
      ],
    },

    ja: {
      metaTitle: "このスパイダーソリティアサイトについて",
      metaDescription:
        "SpiderDeck について。1・2・4スートのテーブル、ローカル統計、アカウント不要、広告なしの無料・独立系スパイダーソリティアサイトです。",
      title: "SpiderDeck について",
      description:
        "SpiderDeck について。1・2・4スートのテーブルとローカル統計を備え、アカウントも広告もない無料のブラウザ版スパイダーソリティアサイトです。",
      eyebrow: "サイトについて",
      breadcrumb: "概要",
      playHref: "/",
      playLabel: "スパイダーソリティアで遊ぶ",
      lead: "SpiderDeck は、ひとつの考えを中心に作られた小さな独立系ブラウザゲームサイトです。リンクを開くだけで、アカウントもダウンロードも、気を散らすロビーもなしに、すっきりしたスパイダーソリティアを遊べること。",
      related: [
        {
          href: "/guides",
          title: "ガイド",
          description: "ルール、攻略、難易度、モバイルのヘルプ。",
        },
        {
          href: "/credits",
          title: "クレジット",
          description: "エンジンとカードアートのライセンス。",
        },
        {
          href: "/spider-solitaire-2-suits",
          title: "2スートのテーブル",
          description: "デフォルトモードとおすすめの理由。",
        },
        {
          href: "/spider-solitaire-faq",
          title: "よくある質問",
          description: "保存、スコア、オフラインプレイについての回答。",
        },
      ],
      blocks: [
        { type: "h2", id: "what", text: "このサイトについて" },
        {
          type: "p",
          text: "SpiderDeck は無料のスパイダーソリティアサイトです。1スート・2スート・4スートのテーブル、無制限の元に戻す、ヒント、難易度別の統計、そしてスマホ・タブレット・PCで動作するレスポンシブな盤面を備えています。デフォルトが2スートなのは、日常的に遊ぶのに最もバランスの取れた難易度だからです。",
        },
        {
          type: "p",
          text: "アカウント、クラウド同期、テーブル内の広告、デイリーチャレンジはありません。未完了のゲームと統計はブラウザのローカルに保存され、メールアドレスやプロフィールとは結び付きません。",
        },
        { type: "h2", id: "why", text: "なぜ作ったのか" },
        {
          type: "p",
          text: "無料のソリティアページの多くは、バナーやサイドバー、自動再生動画で埋まった大きなページの中に小さなゲームを読み込んでいます。アプリのインストールや登録をしないと最初のカードが出ないサイトもあります。このサイトはその逆を目指しました。ページの最初にゲームがあり、操作は見えていて、読み物はプレイを邪魔しないようテーブルの下に置かれています。",
        },
        {
          type: "p",
          text: "どのデバイスにも同じレイアウトを配信します。PC専用の案内でゲームを隠す代わりに、盤面は画面に合わせて拡大縮小し、狭い画面ではカードを簡略化します。そのため別のモバイルアプリを維持しなくても、スマホでそのまま使えます。",
        },
        { type: "h2", id: "built", text: "どのように作られているか" },
        {
          type: "p",
          text: "ゲームは Next.js と React で作られた静的 Web アプリケーションです。スパイダーソリティアのエンジンは、MIT ライセンスのオープンソースプロジェクト [Time2Code0/spider-solitaire](https://github.com/Time2Code0/spider-solitaire) を利用しています。カードテーブル、レスポンシブレイアウト、ルーティング、コンテンツ、メタデータ、サイトデザインはこのサイト向けに調整しました。",
        },
        {
          type: "p",
          text: "静的ビルドはシンプルなホスティング向けに設計されています。データベースもログインサービスも、プレイ内容を保存する API もありません。カードアートは SVG ファイルとして配信され、ゲームの状態はすべてブラウザ内で処理されます。",
        },
        { type: "h2", id: "rules", text: "ルールと編集方針" },
        {
          type: "p",
          text: "このサイトで説明しているのは、テーブルが採用している標準のスパイダーソリティアのルールです。10列、104枚、山札からの5回の配布、同スートのグループ移動、どのカードでも置ける空列、KからAまでのランが自動でファウンデーションへ送られる仕組みです。混乱しやすい箇所では、ローカルルールの違いにも触れています。",
        },
        {
          type: "p",
          text: "このサイトは Microsoft、Windows ソリティア、その他の商用ソリティア製品とは提携していません。Spider Solitaire（スパイダーソリティア）は伝統的なカードゲームの名称であり、ここでの実装と文章は独立したものです。",
        },
        { type: "h2", id: "limits", text: "このサイトがしないこと" },
        {
          type: "ul",
          items: [
            "ユーザーアカウント、メール配信、クラウド保存のゲームはありません。",
            "現金を賭けるゲーム、賞品、トーナメント参加はありません。",
            "オフラインモードの保証やインストール版アプリはありません。",
            "デイリーチャレンジや共有ランキングはありません。",
            "公式のスパイダーソリティア製品であるとは主張しません。",
          ],
        },
        { type: "h2", id: "credits-link", text: "クレジットとライセンス" },
        {
          type: "p",
          text: "エンジンとカードアートは、オープンソースおよびパブリックドメインのプロジェクトに由来します。正確なクレジットは[クレジットページ](/credits)に記載しています。ルールを探しているなら[遊び方](/how-to-play)から、上達したいなら[攻略ガイド](/spider-solitaire-strategy)をお読みください。",
        },
      ],
    },
  },
};
