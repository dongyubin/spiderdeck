import type { PageDefinition } from "../types";

export const mobilePage: PageDefinition = {
  slug: "spider-solitaire-mobile",
  contents: {
    en: {
      metaTitle: "Spider Solitaire Mobile – Play on Phone or Tablet",
      metaDescription:
        "Play Spider Solitaire on a phone or tablet. Learn the tap-to-move controls, how the board scales, and the settings that make small-screen play easier.",
      title: "Spider Solitaire on Mobile",
      description:
        "How to play Spider Solitaire on a phone or tablet: touch controls, responsive board, compact cards, orientation advice, and saved progress.",
      eyebrow: "Mobile guide",
      breadcrumb: "Mobile",
      lead: "Spider Solitaire has ten columns, which is a lot of horizontal information for a phone. This version does not hide the game behind a desktop-only message. The board scales, the cards switch to a compact view on narrow screens, and every control is reachable with a thumb.",
      playHref: "/",
      playLabel: "Play on this device",
      related: [
        {
          href: "/how-to-play",
          title: "How to Play",
          description: "The rules and controls, including touch instructions.",
        },
        {
          href: "/spider-solitaire-no-download",
          title: "No Download",
          description: "How browser play works and where progress is stored.",
        },
        {
          href: "/spider-solitaire-2-suits",
          title: "2-Suit Table",
          description: "The default mode, ready for a phone-sized game.",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "Strategy Guide",
          description: "Improve your decisions on small and large screens.",
        },
      ],
      faq: [
        {
          q: "Does the game work on an iPhone or Android phone?",
          a: "Yes. The site runs in a mobile browser and scales the ten-column board to the screen. There is no app to install. Use Safari, Chrome, or another modern browser.",
        },
        {
          q: "How do I move cards without dragging?",
          a: "Tap the face-up card or run you want to move, then tap the destination column. Tap the same card again to cancel the selection. Dragging is also supported on touch screens.",
        },
        {
          q: "Why are the cards simplified on my phone?",
          a: "Below 640 pixels wide, the card face switches to a compact rank-and-suit view so the ten columns fit without horizontal scrolling. The full artwork returns on larger screens.",
        },
        {
          q: "Should I play in portrait or landscape?",
          a: "Portrait is recommended. Ten columns fit naturally across the width, and columns have more vertical room. Landscape works, but long columns may need vertical scrolling inside the table area.",
        },
        {
          q: "Does the game save progress if I close the tab?",
          a: "Yes. The current game, statistics, and settings are stored in your browser's local storage. Reopening the site in the same browser should restore the game. Private browsing or clearing site data can remove it.",
        },
        {
          q: "Can I add the game to my home screen?",
          a: "You can create a browser shortcut using your browser's Add to Home Screen option. It opens the site like a bookmark; it is not an offline app and still needs a network connection.",
        },
      ],
      blocks: [
        { type: "h2", id: "layout", text: "How the board fits a phone" },
        {
          type: "p",
          text: "The ten columns share the available width. On a narrow screen, the cards become smaller and the gap between columns shrinks, so the full tableau stays visible without horizontal scrolling. Below 640 pixels, each card also switches to a compact face: a large rank and suit symbol instead of the detailed artwork. That keeps the important information readable when a card is only a few dozen pixels wide.",
        },
        {
          type: "p",
          text: "The stock pile and foundation counter sit just above the bottom bar. The settings, statistics, undo, hint, and new-game controls are in the bottom bar. On very small screens, the time display is hidden to leave room for the controls; the timer still runs and is visible on larger screens.",
        },
        { type: "h2", id: "controls", text: "Touch controls" },
        { type: "h3", text: "Tap to move" },
        {
          type: "p",
          text: "Tap a face-up card or the top of a same-suit run. A highlight shows the selection. Tap the destination column to complete the move. If the move is invalid, the target column shakes and the selection stays available. Tap the selected card again to cancel.",
        },
        { type: "h3", text: "Drag to move" },
        {
          type: "p",
          text: "Press and drag a card or run to another column. Dragging works on touch screens, but tap-to-move is usually more precise on a phone, especially when columns are narrow.",
        },
        { type: "h3", text: "Deal and undo" },
        {
          type: "p",
          text: "Tap the stock pile to deal one card to every column. Tap the undo button to reverse the last move. Undo is unlimited, so you can explore a line and back out without losing the game.",
        },
        { type: "h2", id: "orientation", text: "Portrait or landscape?" },
        {
          type: "p",
          text: "Portrait is the better default. The ten columns fit across the width, and a long column has more vertical room before the table area needs to scroll. Landscape gives each card more width but less height, so long columns are more likely to run past the visible area. If you rotate, the table area can scroll vertically while the bottom controls stay in place.",
        },
        { type: "h2", id: "settings", text: "Settings worth changing on a phone" },
        {
          type: "ul",
          items: [
            "**Card front:** classic and modern faces are easiest to read at small sizes. The compact view uses rank and suit regardless of the selected deck.",
            "**Felt colour:** a darker felt can reduce glare in a bright room; a lighter felt can improve contrast in low light.",
            "**Sound:** off by default. Turn it on only if you want audio feedback for deals and completed runs.",
            "**Default difficulty:** set 2 suits for everyday play or 1 suit for a gentler session.",
          ],
        },
        { type: "h2", id: "performance", text: "Performance and data" },
        {
          type: "p",
          text: "The game is rendered with HTML, CSS, and SVG card artwork. It does not need a plugin, a separate app, or a high-end GPU. The first load fetches the page and card assets; after that, the browser cache usually makes reloads faster. The game state is local to your browser.",
        },
        {
          type: "note",
          text: "**Small-screen tip:** if a column is too tall to see fully, scroll inside the table area rather than zooming the whole page. The bottom bar stays fixed to the game frame, so undo and hint remain reachable.",
        },
      ],
    },

    zh: {
      metaTitle: "蜘蛛纸牌手机版 – 手机、平板随时玩",
      metaDescription:
        "在手机或平板上玩蜘蛛纸牌。了解点按移动的操作方式、牌桌如何自适应缩放，以及让小屏幕游玩更轻松的设置。",
      title: "手机上的蜘蛛纸牌",
      description:
        "如何在手机或平板上玩蜘蛛纸牌：触控操作、自适应牌桌、紧凑牌面、横竖屏建议，以及进度保存。",
      eyebrow: "手机版指南",
      breadcrumb: "手机版",
      lead: "蜘蛛纸牌有十列牌，对手机来说横向信息量不小。这个版本不会用“仅限桌面端”的提示把游戏藏起来：牌桌会自动缩放，窄屏下牌面切换为紧凑样式，所有操作都能用拇指触达。",
      playHref: "/",
      playLabel: "在此设备上开始游戏",
      related: [
        {
          href: "/how-to-play",
          title: "玩法说明",
          description: "规则与操作，包含触控说明。",
        },
        {
          href: "/spider-solitaire-no-download",
          title: "免下载",
          description: "浏览器游玩如何运作，进度保存在哪里。",
        },
        {
          href: "/spider-solitaire-2-suits",
          title: "双花色牌桌",
          description: "默认模式，正好适合手机尺寸的对局。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "策略指南",
          description: "无论大屏还是小屏，都能改善你的决策。",
        },
      ],
      faq: [
        {
          q: "游戏能在 iPhone 或安卓手机上运行吗？",
          a: "可以。本站运行在手机浏览器中，十列牌桌会按屏幕缩放，无需安装任何 App。请使用 Safari、Chrome 或其他现代浏览器。",
        },
        {
          q: "不拖动的话，怎么移动牌？",
          a: "先点按要移动的正面牌或顺子，再点按目标列。再次点按同一张牌可取消选择。触屏上同样支持拖动。",
        },
        {
          q: "为什么手机上的牌变简单了？",
          a: "屏幕宽度小于 640 像素时，牌面会切换为紧凑的点数与花色视图，让十列牌不用横向滚动就能放下。屏幕变大后，精细图案会恢复。",
        },
        {
          q: "应该竖屏还是横屏玩？",
          a: "推荐竖屏。十列牌正好铺满宽度，而且每列纵向空间更充裕。横屏也能玩，但长列可能需要在牌桌区域内纵向滚动。",
        },
        {
          q: "关闭标签页后，游戏会保存进度吗？",
          a: "会。当前对局、统计和设置都保存在浏览器的本地存储中。在同一浏览器中重新打开本站通常会恢复对局；无痕模式或清除站点数据可能会让它消失。",
        },
        {
          q: "可以把游戏添加到主屏幕吗？",
          a: "可以用浏览器的“添加到主屏幕”功能创建一个快捷方式。它像书签一样打开本站，并不是离线应用，仍然需要网络连接。",
        },
      ],
      blocks: [
        { type: "h2", id: "layout", text: "牌桌如何适配手机" },
        {
          type: "p",
          text: "十列牌共享可用宽度。屏幕变窄时，牌会缩小、列间距也会收紧，因此整张牌桌始终可见，无需横向滚动。宽度小于 640 像素时，每张牌还会切换为紧凑牌面：用大号点数和花色符号代替精细图案，这样即使一张牌只有几十像素宽，关键信息依然清晰可读。",
        },
        {
          type: "p",
          text: "牌堆和基础区计数就在底栏上方；设置、统计、撤销、提示和新游戏按钮都位于底栏。在非常小的屏幕上，时间显示会隐藏以腾出空间给操作按钮；计时仍在运行，在较大的屏幕上可见。",
        },
        { type: "h2", id: "controls", text: "触控操作" },
        { type: "h3", text: "点按移动" },
        {
          type: "p",
          text: "点按一张正面朝上的牌，或同花色顺子的顶部。选中后会有高亮提示。再点按目标列即可完成移动。如果移动不合法，目标列会抖动，选中状态仍然保留。再次点按已选中的牌可以取消选择。",
        },
        { type: "h3", text: "拖动移动" },
        {
          type: "p",
          text: "按住一张牌或一组顺子，拖到另一列。触屏上支持拖动，但在手机上点按移动通常更精准，尤其是列很窄的时候。",
        },
        { type: "h3", text: "发牌与撤销" },
        {
          type: "p",
          text: "点按牌堆，给每一列各发一张牌。点按撤销按钮可退回上一步。撤销次数不限，你可以试探一条路线再退回来，而不会输掉这一局。",
        },
        { type: "h2", id: "orientation", text: "竖屏还是横屏？" },
        {
          type: "p",
          text: "竖屏是更好的默认选择：十列牌正好铺满宽度，长列在牌桌区域需要滚动之前有更多纵向空间。横屏让每张牌更宽但更矮，长列更容易超出可见范围。旋转屏幕后，牌桌区域可以纵向滚动，底部操作栏则固定不动。",
        },
        { type: "h2", id: "settings", text: "手机上值得调整的设置" },
        {
          type: "ul",
          items: [
            "**牌面：** 在较小尺寸下，经典和现代牌面最容易辨认。无论选择哪副牌，紧凑视图都只显示点数和花色。",
            "**绒布颜色：** 深色绒布可以减轻明亮环境中的反光，浅色绒布则在弱光下对比更清楚。",
            "**音效：** 默认关闭。只有在你希望发牌和完成顺子时听到反馈，才需要打开。",
            "**默认难度：** 日常游玩设为双花色，想要轻松一点就选单花色。",
          ],
        },
        { type: "h2", id: "performance", text: "性能与数据" },
        {
          type: "p",
          text: "游戏使用 HTML、CSS 和 SVG 牌面绘制，不需要插件、单独的 App，也不依赖高端显卡。首次加载会获取页面和牌图资源，之后浏览器缓存通常会让再次打开更快。游戏状态保存在你的浏览器本地。",
        },
        {
          type: "note",
          text: "**小屏幕提示：** 如果某一列太长看不全，请在牌桌区域内滚动，而不是缩放整个页面。底栏固定在游戏框上，撤销和提示始终可以点到。",
        },
      ],
    },

    ja: {
      metaTitle: "スパイダーソリティア モバイル – スマホ・タブレットでプレイ",
      metaDescription:
        "スマホやタブレットでスパイダーソリティアをプレイ。タップ移動の操作、ボードの自動調整、小さい画面で快適に遊ぶための設定を解説します。",
      title: "スマホで遊ぶスパイダーソリティア",
      description:
        "スマホやタブレットでスパイダーソリティアを遊ぶ方法。タッチ操作、レスポンシブな盤面、コンパクトなカード、画面の向きのコツ、進行状況の保存について説明します。",
      eyebrow: "モバイルガイド",
      breadcrumb: "モバイル",
      lead: "スパイダーソリティアは10列あり、スマホでは横方向の情報量が多くなります。このバージョンは「PC専用」の案内でゲームを隠しません。盤面は画面に合わせて縮み、狭い画面ではカードがコンパクト表示になり、すべての操作に親指で届きます。",
      playHref: "/",
      playLabel: "この端末でプレイ",
      related: [
        {
          href: "/how-to-play",
          title: "遊び方",
          description: "タッチ操作を含むルールと操作方法。",
        },
        {
          href: "/spider-solitaire-no-download",
          title: "ダウンロード不要",
          description: "ブラウザプレイの仕組みと進行状況の保存先。",
        },
        {
          href: "/spider-solitaire-2-suits",
          title: "2スートのテーブル",
          description: "スマホサイズでも遊びやすいデフォルトモード。",
        },
        {
          href: "/spider-solitaire-strategy",
          title: "攻略ガイド",
          description: "大きな画面でも小さな画面でも判断を改善します。",
        },
      ],
      faq: [
        {
          q: "iPhone や Android のスマホで動きますか？",
          a: "はい。モバイルブラウザ上で動作し、10列の盤面を画面に合わせて調整します。インストールするアプリはありません。Safari、Chrome などの最新ブラウザをお使いください。",
        },
        {
          q: "ドラッグせずにカードを動かすには？",
          a: "動かしたい表向きのカードまたはランをタップし、移動先の列をタップします。同じカードをもう一度タップすると選択を解除できます。タッチ画面ではドラッグも使えます。",
        },
        {
          q: "スマホでカードが簡略化されるのはなぜ？",
          a: "幅640ピクセル未満では、10列が横スクロールなしで収まるよう、カードの表がランクとスートだけのコンパクト表示に切り替わります。画面が広くなれば通常の絵柄に戻ります。",
        },
        {
          q: "縦向きと横向き、どちらで遊ぶべき？",
          a: "縦向きがおすすめです。10列が幅に自然に収まり、列の縦の余裕も増えます。横向きでも遊べますが、長い列は場の中で縦スクロールが必要になることがあります。",
        },
        {
          q: "タブを閉じても進行状況は保存されますか？",
          a: "はい。現在のゲーム、統計、設定はブラウザのローカルストレージに保存されます。同じブラウザでサイトを開き直せば復元されるはずです。プライベートブラウズやサイトデータの消去で失われることがあります。",
        },
        {
          q: "ホーム画面に追加できますか？",
          a: "ブラウザの「ホーム画面に追加」機能でショートカットを作成できます。ブックマークのようにサイトを開くもので、オフラインアプリではなく、ネットワーク接続は必要です。",
        },
      ],
      blocks: [
        { type: "h2", id: "layout", text: "盤面がスマホに収まる仕組み" },
        {
          type: "p",
          text: "10列が利用可能な幅を分け合います。画面が狭いとカードは小さくなり、列の間隔も詰まるため、横スクロールなしで場全体が見えます。幅640ピクセル未満では、各カードがコンパクトな表向き表示に切り替わり、細かい絵柄の代わりに大きなランクとスート記号を表示します。カードの幅が数十ピクセルしかなくても、大事な情報を読み取れるようにするためです。",
        },
        {
          type: "p",
          text: "山札とファウンデーションのカウンターは下部バーのすぐ上にあります。設定、統計、元に戻す、ヒント、新しいゲームの操作は下部バーにまとまっています。非常に小さい画面では操作スペースを確保するため時刻表示が隠れますが、タイマーは動作を続け、大きい画面では表示されます。",
        },
        { type: "h2", id: "controls", text: "タッチ操作" },
        { type: "h3", text: "タップで移動" },
        {
          type: "p",
          text: "表向きのカード、または同スートのランの一番上をタップします。選択中はハイライトが表示されます。移動先の列をタップすると移動が完了します。移動が無効な場合は対象の列が揺れ、選択はそのまま残ります。選択中のカードをもう一度タップすると選択を解除できます。",
        },
        { type: "h3", text: "ドラッグで移動" },
        {
          type: "p",
          text: "カードまたはランを押したまま別の列へドラッグします。タッチ画面でもドラッグは使えますが、特に列が狭いスマホではタップ移動のほうが正確です。",
        },
        { type: "h3", text: "配布と元に戻す" },
        {
          type: "p",
          text: "山札をタップすると各列に1枚ずつ配られます。元に戻すボタンをタップすると直前の手を戻せます。元に戻すは無制限なので、ある手順を試してから引き返してもゲームを失いません。",
        },
        { type: "h2", id: "orientation", text: "縦向きと横向き、どちらが良い？" },
        {
          type: "p",
          text: "縦向きがおすすめです。10列が幅に収まり、長い列も場がスクロールする前に縦の余裕があります。横向きはカードの幅は広がりますが高さが減るため、長い列が見える範囲を超えやすくなります。画面を回転しても、場は縦にスクロールでき、下部の操作はそのまま固定されます。",
        },
        { type: "h2", id: "settings", text: "スマホで変えておきたい設定" },
        {
          type: "ul",
          items: [
            "**カードの表：** 小さいサイズではクラシックかモダンの表が見やすいです。コンパクト表示では選んだデッキに関係なくランクとスートで表示されます。",
            "**フェルトの色：** 明るい部屋では暗めのフェルトがまぶしさを抑え、暗い場所では明るめのフェルトがコントラストを高めます。",
            "**サウンド：** 初期設定はオフです。配布やランの完成を音で知りたいときだけオンにしましょう。",
            "**デフォルトの難易度：** 日常的に遊ぶなら2スート、ゆったり遊ぶなら1スートがおすすめです。",
          ],
        },
        { type: "h2", id: "performance", text: "動作環境とデータ" },
        {
          type: "p",
          text: "ゲームは HTML、CSS、SVG のカード画像で描画されます。プラグインや別のアプリ、高性能な GPU は必要ありません。初回の読み込みでページとカード素材を取得し、以降はブラウザのキャッシュで再読み込みが速くなります。ゲームの状態はブラウザ内に保存されます。",
        },
        {
          type: "note",
          text: "**小さい画面のコツ：** 列が長すぎて全体が見えないときは、ページ全体を拡大するのではなく場の中をスクロールしてください。下部バーはゲーム枠に固定されているので、元に戻すとヒントはいつでも押せます。",
        },
      ],
    },
  },
};
