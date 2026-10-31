import type { PageDefinition } from "../types";

export const creditsPage: PageDefinition = {
  slug: "credits",
  contents: {
    en: {
      metaTitle: "Credits & Licenses",
      metaDescription:
        "Software and artwork credits for SpiderDeck: the MIT-licensed Spider Solitaire engine, card deck licenses, and open-source libraries.",
      title: "Credits & Licenses",
      description:
        "Credits and licenses for SpiderDeck: game engine, card artwork, and open-source software.",
      eyebrow: "Attribution",
      breadcrumb: "Credits",
      playHref: "/",
      playLabel: "Play Spider Solitaire",
      lead: "SpiderDeck builds on open-source software and openly licensed card artwork. This page records the attributions. The full license texts are included in the project's asset directories.",
      related: [
        {
          href: "/about",
          title: "About SpiderDeck",
          description: "What the site is and how it is built.",
        },
        {
          href: "/guides",
          title: "Guides",
          description: "Rules, strategy, and difficulty help.",
        },
        {
          href: "/spider-solitaire-faq",
          title: "FAQ",
          description: "Common questions about the site and game.",
        },
      ],
      blocks: [
        { type: "h2", id: "engine", text: "Game engine" },
        {
          type: "p",
          text: "**Time2Code0/spider-solitaire** — MIT License, Copyright (c) 2026 Time2Code. The engine provides the card model, deal generation, move validation, undo history, hints, and game state.",
        },
        {
          type: "p",
          text: "Source: [github.com/Time2Code0/spider-solitaire](https://github.com/Time2Code0/spider-solitaire). The MIT license text is retained in the repository root as LICENSE.",
        },
        { type: "h2", id: "cards", text: "Card artwork" },
        {
          type: "p",
          text: "The card faces and backs are distributed with the engine and are covered by the notices in the card asset directory. The project's public/cards/NOTICE file records the following:",
        },
        {
          type: "ul",
          items: [
            "**Classic deck** — by kumanofoo, MIT License. License text is kept in the classic deck directory.",
            "**Vintage deck** — by David Bellot, LGPL-2.1. The license text is kept with the vintage deck assets.",
            "**Modern deck** — by Byron Knoll, public domain.",
          ],
        },
        {
          type: "p",
          text: "Card backs and the felt backgrounds are part of the same open-source asset set. The site does not claim ownership of the original artwork.",
        },
        { type: "h2", id: "software", text: "Software libraries" },
        {
          type: "p",
          text: "The site is built with Next.js, React, TypeScript, Tailwind CSS, Motion, Zustand, Lucide icons, and other open-source packages. Each package is used under its own license. The dependency versions are recorded in the project manifest and lockfile.",
        },
        { type: "h2", id: "content", text: "Site content" },
        {
          type: "p",
          text: "The written guides, site layout, navigation, metadata, and responsive game integration were created for SpiderDeck. The rules content describes the standard game and is not copied from a commercial solitaire product.",
        },
        { type: "h2", id: "trademarks", text: "Trademarks" },
        {
          type: "p",
          text: "“Spider Solitaire” is a traditional card game name. Microsoft, Windows, and other product names are trademarks of their respective owners. SpiderDeck is an independent project and is not endorsed by or affiliated with those companies.",
        },
        {
          type: "note",
          text: "**License files:** the MIT license for the engine and the card artwork notices are kept in the deployed project alongside the source. If you redistribute the game, keep those files with the assets.",
        },
        {
          type: "p",
          text: "For the site's scope and privacy approach, see [About SpiderDeck](/about).",
        },
      ],
    },

    zh: {
      metaTitle: "鸣谢与许可",
      metaDescription:
        "SpiderDeck 的软件与美术鸣谢：MIT 许可的蜘蛛纸牌引擎、牌面许可，以及开源库。",
      title: "鸣谢与许可",
      description:
        "SpiderDeck 的鸣谢与许可：游戏引擎、牌面美术和开源软件。",
      eyebrow: "署名信息",
      breadcrumb: "鸣谢",
      playHref: "/",
      playLabel: "玩蜘蛛纸牌",
      lead: "SpiderDeck 建立在开源软件和开放许可的牌面美术之上。本页记录相关署名，完整的许可文本收录在项目的资源目录中。",
      related: [
        {
          href: "/about",
          title: "关于 SpiderDeck",
          description: "这个网站是什么，以及它是如何构建的。",
        },
        {
          href: "/guides",
          title: "指南",
          description: "规则、策略和难度方面的帮助。",
        },
        {
          href: "/spider-solitaire-faq",
          title: "常见问题",
          description: "关于本站和游戏的常见疑问。",
        },
      ],
      blocks: [
        { type: "h2", id: "engine", text: "游戏引擎" },
        {
          type: "p",
          text: "**Time2Code0/spider-solitaire** — MIT License，Copyright (c) 2026 Time2Code。该引擎提供牌型模型、发牌生成、移动合法性校验、撤销历史、提示和游戏状态。",
        },
        {
          type: "p",
          text: "来源：[github.com/Time2Code0/spider-solitaire](https://github.com/Time2Code0/spider-solitaire)。MIT 许可全文保留在仓库根目录的 LICENSE 文件中。",
        },
        { type: "h2", id: "cards", text: "牌面美术" },
        {
          type: "p",
          text: "牌面和牌背随引擎一同分发，并受牌面资源目录中的声明约束。项目的 public/cards/NOTICE 文件记录了以下内容：",
        },
        {
          type: "ul",
          items: [
            "**Classic deck** — 作者 kumanofoo，MIT License。许可文本保存在 classic deck 目录中。",
            "**Vintage deck** — 作者 David Bellot，LGPL-2.1。许可文本与 vintage deck 资源放在一起。",
            "**Modern deck** — 作者 Byron Knoll，公有领域。",
          ],
        },
        {
          type: "p",
          text: "牌背和绒布背景属于同一套开源资源。本站不主张对原始美术作品的所有权。",
        },
        { type: "h2", id: "software", text: "软件库" },
        {
          type: "p",
          text: "本站使用 Next.js、React、TypeScript、Tailwind CSS、Motion、Zustand、Lucide 图标以及其他开源包构建。每个包都遵循其各自的许可。依赖版本记录在项目的清单文件和锁文件中。",
        },
        { type: "h2", id: "content", text: "站点内容" },
        {
          type: "p",
          text: "站内指南文字、页面布局、导航、元数据和响应式游戏集成均为 SpiderDeck 创作。规则内容描述的是标准玩法，并未从任何商业纸牌产品复制。",
        },
        { type: "h2", id: "trademarks", text: "商标" },
        {
          type: "p",
          text: "Spider Solitaire（蜘蛛纸牌）是传统纸牌游戏的名称。Microsoft、Windows 及其他产品名称是其各自所有者的商标。SpiderDeck 是一个独立项目，未获得上述公司的认可，也与其无关联。",
        },
        {
          type: "note",
          text: "**许可文件：** 引擎的 MIT 许可与牌面美术声明与源代码一起保存在已部署的项目中。如果你再分发这款游戏，请将这些文件与资源一并保留。",
        },
        {
          type: "p",
          text: "关于本站的范围与隐私做法，请参阅[关于 SpiderDeck](/about)。",
        },
      ],
    },

    ja: {
      metaTitle: "クレジットとライセンス",
      metaDescription:
        "SpiderDeck のソフトウェアとアートのクレジット。MIT ライセンスのスパイダーソリティアエンジン、カードデッキのライセンス、オープンソースライブラリ。",
      title: "クレジットとライセンス",
      description:
        "SpiderDeck のクレジットとライセンス：ゲームエンジン、カードアート、オープンソースソフトウェア。",
      eyebrow: "帰属表示",
      breadcrumb: "クレジット",
      playHref: "/",
      playLabel: "スパイダーソリティアで遊ぶ",
      lead: "SpiderDeck はオープンソースソフトウェアとオープンライセンスのカードアートの上に成り立っています。このページに帰属情報を記録します。ライセンス全文はプロジェクトのアセットディレクトリに含まれています。",
      related: [
        {
          href: "/about",
          title: "SpiderDeck について",
          description: "サイトの内容と、どのように作られているか。",
        },
        {
          href: "/guides",
          title: "ガイド",
          description: "ルール、攻略、難易度のヘルプ。",
        },
        {
          href: "/spider-solitaire-faq",
          title: "よくある質問",
          description: "サイトとゲームに関するよくある疑問。",
        },
      ],
      blocks: [
        { type: "h2", id: "engine", text: "ゲームエンジン" },
        {
          type: "p",
          text: "**Time2Code0/spider-solitaire** — MIT License、Copyright (c) 2026 Time2Code。このエンジンがカードモデル、配布の生成、移動の検証、元に戻す履歴、ヒント、ゲーム状態を提供します。",
        },
        {
          type: "p",
          text: "ソース：[github.com/Time2Code0/spider-solitaire](https://github.com/Time2Code0/spider-solitaire)。MIT ライセンスの全文はリポジトリ直下の LICENSE に保持されています。",
        },
        { type: "h2", id: "cards", text: "カードアート" },
        {
          type: "p",
          text: "カードの表と裏はエンジンとともに配布され、カードアセットディレクトリ内の告知に従います。プロジェクトの public/cards/NOTICE ファイルには次のように記録されています。",
        },
        {
          type: "ul",
          items: [
            "**Classic deck** — kumanofoo 作、MIT License。ライセンス全文は classic deck ディレクトリに保管されています。",
            "**Vintage deck** — David Bellot 作、LGPL-2.1。ライセンス全文は vintage deck のアセットと一緒に保管されています。",
            "**Modern deck** — Byron Knoll 作、パブリックドメイン。",
          ],
        },
        {
          type: "p",
          text: "カードの裏とフェルトの背景も同じオープンソースアセット群の一部です。サイトはオリジナルのアートワークの所有権を主張しません。",
        },
        { type: "h2", id: "software", text: "ソフトウェアライブラリ" },
        {
          type: "p",
          text: "このサイトは Next.js、React、TypeScript、Tailwind CSS、Motion、Zustand、Lucide アイコンなどのオープンソースパッケージで構築されています。各パッケージはそれぞれのライセンスの下で使用しています。依存関係のバージョンはプロジェクトのマニフェストとロックファイルに記録されています。",
        },
        { type: "h2", id: "content", text: "サイトコンテンツ" },
        {
          type: "p",
          text: "ガイドの文章、サイトレイアウト、ナビゲーション、メタデータ、レスポンシブなゲームの統合は SpiderDeck のために制作しました。ルールの内容は標準的なゲームを説明したもので、商用ソリティア製品からコピーしたものではありません。",
        },
        { type: "h2", id: "trademarks", text: "商標" },
        {
          type: "p",
          text: "Spider Solitaire（スパイダーソリティア）は伝統的なカードゲームの名称です。Microsoft、Windows、その他の製品名はそれぞれの所有者の商標です。SpiderDeck は独立したプロジェクトであり、これらの企業から承認を受けておらず、提携もしていません。",
        },
        {
          type: "note",
          text: "**ライセンスファイル：** エンジンの MIT ライセンスとカードアートの告知は、ソースとともにデプロイされたプロジェクト内に保管されています。ゲームを再配布する場合は、これらのファイルをアセットと一緒に残してください。",
        },
        {
          type: "p",
          text: "サイトの範囲とプライバシーへの取り組みについては、[SpiderDeck について](/about)をご覧ください。",
        },
      ],
    },
  },
};
