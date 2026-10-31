import type { PageDefinition } from "../types";

export const noDownloadPage: PageDefinition = {
  slug: "spider-solitaire-no-download",
  contents: {
    en: {
      metaTitle: "Spider Solitaire No Download – Play Free in Browser",
      metaDescription:
        "Play Spider Solitaire with no download and no sign-up. Learn how browser play works, where saved games live, and what to expect from offline access.",
      title: "Spider Solitaire No Download",
      description:
        "Play Spider Solitaire without downloading an app. Learn how browser play, local saved games, accounts, and updates work.",
      eyebrow: "Browser play",
      breadcrumb: "No Download",
      lead: "“No download” means exactly what it sounds like: there is no installer to run, no app store page, and no permission request for your device. The game is a web page, and the browser is the runtime. That trade-off has real benefits and a few limits worth knowing.",
      playHref: "/",
      playLabel: "Open the browser table",
      related: [
        {
          href: "/spider-solitaire-mobile",
          title: "Mobile Play",
          description: "How the game behaves on phones and tablets.",
        },
        {
          href: "/spider-solitaire-unblocked",
          title: "Unblocked Access",
          description: "What browser-based play can and cannot get around.",
        },
        {
          href: "/how-to-play",
          title: "How to Play",
          description: "Rules and controls before your first hand.",
        },
        {
          href: "/spider-solitaire-faq",
          title: "FAQ",
          description: "Answers about saving, offline play, and accounts.",
        },
      ],
      faq: [
        {
          q: "Do I need to download anything to play?",
          a: "No. The game runs in a modern web browser. There is no installer, app store purchase, or plugin. Open the page and the table loads.",
        },
        {
          q: "Do I need an account or email address?",
          a: "No. There is no account system. Your current game, preferences, and statistics are stored locally in the browser.",
        },
        {
          q: "Can I play offline?",
          a: "Offline play is not supported as a guaranteed feature. The game may remain available from your browser cache in some cases, but a normal reload without a network connection is not reliable. Treat it as an online browser game.",
        },
        {
          q: "Where is my saved game stored?",
          a: "In your browser's local storage for this site. Clearing site data, using private browsing, or switching browsers removes access to that saved state. It is not stored on a server.",
        },
        {
          q: "Is the game updated automatically?",
          a: "Yes. When you load the site, the browser fetches the current version. There is no app update prompt or version to manage.",
        },
        {
          q: "Does it work on Windows, macOS, Linux, Android, and iOS?",
          a: "It works in modern browsers on desktop and mobile operating systems, including Safari, Chrome, Firefox, and Edge. Very old browsers may not support the required CSS and JavaScript features.",
        },
      ],
      blocks: [
        { type: "h2", id: "what-it-means", text: "What browser play means" },
        {
          type: "p",
          text: "The game is delivered as HTML, CSS, JavaScript, and SVG card artwork. Your browser downloads those assets, then runs the game locally. Moves are evaluated in the page; there is no server round trip for each card you drag. That is why the table responds immediately once it has loaded.",
        },
        {
          type: "p",
          text: "There is no installation step and no app icon added to your device unless you create a browser shortcut yourself. It also means there is no app permission list, no background process, and no app-store account involved.",
        },
        { type: "h2", id: "benefits", text: "Why people look for no-download solitaire" },
        {
          type: "ul",
          items: [
            "**Instant access:** open a link and play. No waiting for an installer or a store download.",
            "**Works across devices:** the same site runs on a work laptop, a home desktop, a tablet, and a phone.",
            "**No account:** there is no sign-up wall, email verification, or password to remember.",
            "**No local install footprint:** the game does not add a program to your system. Browser cache is the main local storage.",
            "**Always current:** reloading the page loads the current version; there is no separate updater.",
          ],
        },
        { type: "h2", id: "progress", text: "What is saved, and where" },
        {
          type: "p",
          text: "The current game, your settings, and your statistics are kept in **browser local storage**. This is a small data store tied to the site and the browser you are using. It is not an account and it does not sync between devices.",
        },
        {
          type: "p",
          text: "If you clear your browser's site data, use private browsing, or switch to another browser, the saved game may be gone. There is no server-side backup and no “restore my account” option. Finish a game if it matters, or leave the tab open.",
        },
        { type: "h2", id: "offline", text: "The offline question" },
        {
          type: "p",
          text: "Do not rely on offline play. The site is a static web app, and browsers may keep some assets in cache, but there is no service worker promising a full offline experience. A normal hard refresh without a network connection can fail. If you need guaranteed offline solitaire, a locally installed app is a better fit.",
        },
        { type: "h2", id: "security", text: "Privacy and data" },
        {
          type: "p",
          text: "There is no account, no login, and no game server storing your moves. Preferences and statistics stay in your browser. Like any website, the hosting provider may process standard request logs such as IP address and user agent for delivery and abuse prevention. See the [about page](/about) for the site's scope and the [credits page](/credits) for software and artwork attribution.",
        },
        { type: "h2", id: "shortcut", text: "Can I add a home-screen shortcut?" },
        {
          type: "p",
          text: "Yes. Mobile browsers offer an “Add to Home Screen” or “Add to Home screen” option in the share menu. That creates a shortcut that opens this site in your browser. It is convenient, but it is not the same as an installed app: the game still loads from the web and does not gain offline guarantees.",
        },
        {
          type: "note",
          text: "**Bottom line:** no download, no sign-up, no app permissions. In exchange, you need a network connection and a modern browser, and your saved progress lives only on the device where you played.",
        },
      ],
    },

    zh: {
      metaTitle: "蜘蛛纸牌免下载 – 浏览器免费畅玩",
      metaDescription:
        "免下载、免注册玩蜘蛛纸牌。了解浏览器游玩的工作原理、存档保存在哪里，以及离线访问的真实情况。",
      title: "蜘蛛纸牌免下载版",
      description:
        "不用下载 App 也能玩蜘蛛纸牌。了解浏览器游玩、本地存档、账号和自动更新分别是怎么运作的。",
      eyebrow: "浏览器游玩",
      breadcrumb: "免下载",
      lead: "“免下载”就是字面意思：没有需要运行的安装程序，没有应用商店页面，也不会向你的设备索取权限。游戏本身是一个网页，浏览器就是运行环境。这种取舍有实实在在的好处，也有几点限制值得了解。",
      playHref: "/",
      playLabel: "打开浏览器牌桌",
      related: [
        {
          href: "/spider-solitaire-mobile",
          title: "手机版游玩",
          description: "游戏在手机和平板上的表现。",
        },
        {
          href: "/spider-solitaire-unblocked",
          title: "解除屏蔽访问",
          description: "浏览器游玩能绕过什么、又不能绕过什么。",
        },
        {
          href: "/how-to-play",
          title: "玩法说明",
          description: "第一局之前需要了解的规则与操作。",
        },
        {
          href: "/spider-solitaire-faq",
          title: "常见问题",
          description: "关于存档、离线游玩和账号的解答。",
        },
      ],
      faq: [
        {
          q: "玩这个需要下载什么吗？",
          a: "不需要。游戏在现代浏览器中运行，没有安装包、没有应用商店购买，也不需要插件。打开页面，牌桌就会加载。",
        },
        {
          q: "需要账号或邮箱吗？",
          a: "不需要。本站没有账号系统。当前对局、偏好设置和统计数据都保存在浏览器本地。",
        },
        {
          q: "可以离线玩吗？",
          a: "离线游玩不是受保证的功能。某些情况下浏览器缓存可能仍可打开游戏，但断网后正常刷新并不可靠。请把它当作在线浏览器游戏。",
        },
        {
          q: "存档保存在哪里？",
          a: "保存在本站对应的浏览器本地存储中。清除站点数据、使用无痕模式或更换浏览器都会失去对该存档的访问，它并不存放在服务器上。",
        },
        {
          q: "游戏会自动更新吗？",
          a: "会。加载网站时浏览器会获取当前版本，没有应用更新提示，也不需要管理版本。",
        },
        {
          q: "在 Windows、macOS、Linux、Android 和 iOS 上都能用吗？",
          a: "在桌面和移动操作系统上的现代浏览器中都能运行，包括 Safari、Chrome、Firefox 和 Edge。非常旧的浏览器可能不支持所需的 CSS 和 JavaScript 特性。",
        },
      ],
      blocks: [
        { type: "h2", id: "what-it-means", text: "浏览器游玩意味着什么" },
        {
          type: "p",
          text: "游戏以 HTML、CSS、JavaScript 和 SVG 牌图的形式提供。浏览器下载这些资源后在本地运行，每一步都在页面内计算，拖动每张牌都不需要与服务器往返通信。这就是牌桌加载完成后响应如此迅速的原因。",
        },
        {
          type: "p",
          text: "没有安装步骤，除非你自己创建浏览器快捷方式，否则设备上也不会多出应用图标。这也意味着没有应用权限清单、没有后台进程，也不涉及应用商店账号。",
        },
        { type: "h2", id: "benefits", text: "为什么大家都在找免下载纸牌" },
        {
          type: "ul",
          items: [
            "**即开即玩：** 打开链接就能玩，不用等安装程序或商店下载。",
            "**跨设备可用：** 同一个网站能在办公笔记本、家里台式机、平板和手机上运行。",
            "**无需账号：** 没有注册墙、邮箱验证，也不用记密码。",
            "**不占本地安装空间：** 游戏不会往你的系统里添加程序，本地占用主要是浏览器缓存。",
            "**始终是最新版：** 刷新页面即加载当前版本，没有单独的更新程序。",
          ],
        },
        { type: "h2", id: "progress", text: "保存了什么，存在哪里" },
        {
          type: "p",
          text: "当前对局、设置和统计数据都保存在**浏览器本地存储**中。这是一个与站点和你所用浏览器绑定的小型数据存储，不是账号，也不会在设备之间同步。",
        },
        {
          type: "p",
          text: "如果你清除浏览器的站点数据、使用无痕模式，或换用另一个浏览器，存档可能就没了。这里没有服务器端备份，也没有“恢复我的账号”这种选项。重要的对局请打完，或者把标签页留着别关。",
        },
        { type: "h2", id: "offline", text: "关于离线" },
        {
          type: "p",
          text: "不要把离线游玩当作可靠功能。本站是静态网页应用，浏览器可能会缓存部分资源，但没有 Service Worker 来保证完整的离线体验。断网后正常强制刷新可能失败。如果你需要稳定的离线纸牌，安装到本地的应用更合适。",
        },
        { type: "h2", id: "security", text: "隐私与数据" },
        {
          type: "p",
          text: "这里没有账号、没有登录，也没有保存你每一步的游戏服务器。偏好设置和统计数据都留在你的浏览器里。和任何网站一样，托管服务商可能会处理 IP 地址、User-Agent 等标准请求日志，用于内容分发和防止滥用。站点范围见[关于页面](/about)，软件与美术资源的署名见[致谢页面](/credits)。",
        },
        { type: "h2", id: "shortcut", text: "可以添加主屏幕快捷方式吗？" },
        {
          type: "p",
          text: "可以。手机浏览器的分享菜单里通常有“添加到主屏幕”选项，它会创建一个在你的浏览器中打开本站的快捷方式。这很方便，但与安装应用并不相同：游戏仍从网络加载，也不会因此获得离线保证。",
        },
        {
          type: "note",
          text: "**总结：** 免下载、免注册、免应用权限。代价是你需要网络连接和现代浏览器，而且存档只保存在你玩过的那台设备上。",
        },
      ],
    },

    ja: {
      metaTitle: "スパイダーソリティア ダウンロード不要 – ブラウザで無料プレイ",
      metaDescription:
        "ダウンロードも登録も不要でスパイダーソリティアをプレイ。ブラウザで動く仕組み、セーブデータの保存先、オフライン利用の実際を解説します。",
      title: "ダウンロード不要のスパイダーソリティア",
      description:
        "アプリをダウンロードせずにスパイダーソリティアをプレイ。ブラウザでの動作、ローカル保存、アカウント、更新の仕組みを説明します。",
      eyebrow: "ブラウザプレイ",
      breadcrumb: "ダウンロード不要",
      lead: "「ダウンロード不要」はそのままの意味です。実行するインストーラーも、アプリストアのページも、端末への権限要求もありません。ゲームはWebページで、ブラウザが実行環境です。この割り切りには確かな利点があり、知っておきたい制限もいくつかあります。",
      playHref: "/",
      playLabel: "ブラウザのテーブルを開く",
      related: [
        {
          href: "/spider-solitaire-mobile",
          title: "モバイルでプレイ",
          description: "スマホやタブレットでの動作について。",
        },
        {
          href: "/spider-solitaire-unblocked",
          title: "ブロック解除の考え方",
          description: "ブラウザプレイで回避できること、できないこと。",
        },
        {
          href: "/how-to-play",
          title: "遊び方",
          description: "最初の1ゲームの前に知っておきたいルールと操作。",
        },
        {
          href: "/spider-solitaire-faq",
          title: "よくある質問",
          description: "保存、オフラインプレイ、アカウントに関する回答。",
        },
      ],
      faq: [
        {
          q: "遊ぶのに何かダウンロードが必要ですか？",
          a: "いいえ。最新のWebブラウザで動作します。インストーラーも、ストアでの購入も、プラグインもありません。ページを開けばテーブルが読み込まれます。",
        },
        {
          q: "アカウントやメールアドレスは必要ですか？",
          a: "いいえ。アカウントの仕組みはありません。現在のゲーム、設定、統計はブラウザのローカルに保存されます。",
        },
        {
          q: "オフラインで遊べますか？",
          a: "オフラインプレイは保証された機能ではありません。ブラウザのキャッシュから遊べる場合もありますが、ネットワークなしでの通常の再読み込みは当てになりません。オンラインのブラウザゲームとしてお考えください。",
        },
        {
          q: "セーブデータはどこに保存されますか？",
          a: "このサイトのブラウザローカルストレージです。サイトデータの消去、プライベートブラウズ、ブラウザの変更でアクセスできなくなります。サーバーには保存されません。",
        },
        {
          q: "ゲームは自動で更新されますか？",
          a: "はい。サイトを読み込むとブラウザが最新版を取得します。アプリの更新通知やバージョン管理はありません。",
        },
        {
          q: "Windows、macOS、Linux、Android、iOS で動きますか？",
          a: "デスクトップとモバイルの各OSの最新ブラウザで動作します。Safari、Chrome、Firefox、Edge を含みます。非常に古いブラウザでは必要な CSS や JavaScript の機能に対応していない場合があります。",
        },
      ],
      blocks: [
        { type: "h2", id: "what-it-means", text: "ブラウザで遊ぶということ" },
        {
          type: "p",
          text: "ゲームは HTML、CSS、JavaScript、SVG のカード画像として配信されます。ブラウザがそれらをダウンロードしてローカルで実行し、手の判定はページ内で行われます。カードを1枚ドラッグするたびにサーバーと通信することはありません。読み込み後すぐに反応するのはそのためです。",
        },
        {
          type: "p",
          text: "インストールの手順はなく、自分でブラウザのショートカットを作らない限り端末にアプリアイコンが追加されることもありません。アプリの権限一覧やバックグラウンドプロセス、アプリストアのアカウントも関係しません。",
        },
        { type: "h2", id: "benefits", text: "ダウンロード不要のソリティアが求められる理由" },
        {
          type: "ul",
          items: [
            "**すぐ遊べる：** リンクを開くだけでプレイできます。インストーラーやストアのダウンロードを待つ必要はありません。",
            "**どの端末でも：** 同じサイトが仕事用ノートPC、自宅のデスクトップ、タブレット、スマホで動きます。",
            "**アカウント不要：** 登録の壁も、メール認証も、覚えておくパスワードもありません。",
            "**ローカルを占有しない：** システムにプログラムを追加しません。ローカルに残るのは主にブラウザのキャッシュです。",
            "**常に最新：** ページを再読み込みすれば最新版が読み込まれ、専用のアップデーターはありません。",
          ],
        },
        { type: "h2", id: "progress", text: "何が、どこに保存されるか" },
        {
          type: "p",
          text: "現在のゲーム、設定、統計は**ブラウザのローカルストレージ**に保存されます。これはサイトと使用中のブラウザに紐づく小さなデータ領域で、アカウントではなく、端末間で同期されることもありません。",
        },
        {
          type: "p",
          text: "ブラウザのサイトデータを消去したり、プライベートブラウズを使ったり、別のブラウザに切り替えると、セーブデータは失われる可能性があります。サーバー側のバックアップや「アカウントを復元する」機能はありません。大事なゲームは最後まで終えるか、タブを開いたままにしてください。",
        },
        { type: "h2", id: "offline", text: "オフラインで遊べる？" },
        {
          type: "p",
          text: "オフラインプレイは当てにしないでください。このサイトは静的なWebアプリで、ブラウザが一部の素材をキャッシュすることはありますが、完全なオフライン動作を保証するService Workerはありません。ネットワークに接続せずに強制再読み込みすると失敗することがあります。確実なオフラインのソリティアが必要なら、ローカルにインストールするアプリのほうが適しています。",
        },
        { type: "h2", id: "security", text: "プライバシーとデータ" },
        {
          type: "p",
          text: "アカウントもログインもなく、手を保存するゲームサーバーもありません。設定や統計はブラウザ内に残ります。どのウェブサイトとも同じく、ホスティング事業者が配信や不正利用防止のためにIPアドレスやユーザーエージェントなどの標準的なアクセスログを処理することがあります。サイトの範囲は[概要ページ](/about)、ソフトウェアと画像のライセンスは[クレジットページ](/credits)をご覧ください。",
        },
        { type: "h2", id: "shortcut", text: "ホーム画面にショートカットを追加できますか？" },
        {
          type: "p",
          text: "はい。モバイルブラウザの共有メニューには「ホーム画面に追加」の項目があり、このサイトをブラウザで開くショートカットを作成できます。便利ですが、インストールしたアプリとは異なります。ゲームは引き続きWebから読み込まれ、オフラインの保証も得られません。",
        },
        {
          type: "note",
          text: "**まとめ：** ダウンロード不要、登録不要、アプリの権限も不要。その代わりネットワーク接続と最新のブラウザが必要で、セーブデータは遊んだ端末にのみ残ります。",
        },
      ],
    },
  },
};
