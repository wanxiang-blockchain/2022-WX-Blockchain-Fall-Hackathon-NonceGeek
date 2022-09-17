# Tai Shang Soul Card

"让所有的 DAO 和开发者充分向世界广播自己。"

"Let all DAOs and Buidlers show themselves to the world a full play."

面向 DAO、开发者和其它创作者，基于 Venachain、IPFS 等技术栈，SoulCard 提供高信息密度的、可交互的、可 Mint 为 SBT 的链上名片，让用户可以在赛博世界中充分地展现自己，建立个人品牌 / DAO 品牌。

Focus on DAOs, developers and other creators, based on Venachain, IPFS and other technology stacks, SoulCard provides on-chain interactive namecards with high information density that can be Mint as SBT, allowing users to fully display themselves in the cyber world and build a personal brand / DAO brand.

> Deck:
> 
> https://github.com/WeLightProject/Tai-Shang-Soul-Card/blob/main/contents/tai_shang_soul_card_pitch_deck.pdf
> 
> Demo Online: https://soulcard.noncegeek.com
>
> Video Online: https://youtu.be/HVT74l21lB0
>
>
> SoulCard Smart Contract deployed on Venachain: 
>
> https://portal.noncegeek.com/live/contract
>
> User SoulCard Example:
>
> https://github.com/WeLightProject/Tai-Shang-Soul-Card#42-user-soulcard-example
>
> DAO SoulCard Example:
> 
> https://github.com/WeLightProject/Tai-Shang-Soul-Card#41-dao-soulcard-example
>
---
> **Metamask Config**
>
> RPC URL: https://venachain.hewei.in
>
> Chain Id: 300
>

## 0x00 Directory Structure of Repo

// TODO

## 0x01 Quick Introdcution

NonceGeek team builds SoulCard for the social needs of all communities in a distributed society (DeSoc)-- **The chain card that marks the identity of the soul's community**

![SoulCard -- new contact way! (1)](https://tva1.sinaimg.cn/large/e6c9d24egy1h2q36a3x8jj20u00xjgnx.jpg)
<center> Figure The significance of SoulCard in the Web3 social scene </center>

![截屏2022-05-30 上午6.23.07](https://tva1.sinaimg.cn/large/e6c9d24egy1h2q36epe8jj20sc0vu41a.jpg)

<center> Figure The benefits of SoulCard for Web3 social networks </center>

Compared with the traditional personal information display such as LinkedIn homepage, SoulCard has the following features:

* Multi-page flipping SoulCard has higher information density and can be embedded within multiple social scenarios. Such as Mirror articles, Twitter, etc.
* DAO Owner verification is required when casting as NFT to ensure the trustworthiness of SoulCard through the mechanism.
* The information related to the skills recorded on SoulCard will be proved by SpeedRun records, Github PR records, etc.
* After the SoulCard owner joins the DAO, the SoulCard will have the information of the DAO he/she participated in, so that the owner's community can be marked efficiently and clearly.
* SoulCard contains the Web3 footprint of its owner 👣

## 0x02 Background

### 2.1 Building a building block "soul card" based on human social nature

Recently, E. Glen Weyl, Puja Ohlhaver, Vitalik Buterin and others published their paper "Decentralized Society: In Search of the Soul of Web3". The paper represents the trend of the next decade in blockchain - extending from purely distributed finance (Defi) to explore both the path of distributed finance and distributed society (DeSoc).

The basic building blocks of the distributed society are the various communities including DAO (Distributed Self-Organization). A community is a community in a broad sense - a DAO is a community, an occupation is a community, and the residents of a community can also be a community.

In our opinion, if we want to build a blockchain-based distributed society (DeSoc based on Blockchain), it is an important first step to build **onchain business cards** that can mark the identity of the soul (see the paper for the meaning of soul) communities.

Admittedly, there are already many blockchain projects that deal with this proposition to a greater or lesser extent, especially those related to socialization - such as ENS.

However, the various facilities available are far from mature and suffer from at least the following major problems.

- **Only Web3 is not enough**

Since the landing point is to build a person's "soul", the soul built by data only from the Web3 world, or even only from the virtual world, is one-sided. In the case of blockchain developers as a soul type, it is not enough to have their on-chain behavior data as a data source, and their data on Github is also extremely important - although Github is "centralized".

- **Insufficient building blocks**

The various projects that do not build profiles have not yet been "building blocked" to allow soul builders the freedom to build their profiles, which is necessary in an on-chain world where we need a significant degree of "soul pinching freedom" (like face pinching freedom in games). If we can only follow a dead format, then the souls we pinch must also be dead.

- **Not taking into account the human "social nature "**

Existing products do not think in terms of sociology and psychology, so the match with human "social nature" is extremely limited. For example, people socialize according to the "law of first sight". For example, it is said that the first x seconds of perceptual judgment in an interview already determines the outcome, and all subsequent communication is just to find reasons for the outcome. We will not pursue the rigor of this argument, but it is important to make a good first impression in a short period of time. Therefore, in the physical world of social interaction, we will have all kinds of codes in order to enhance the first impression, such as the Dress Code of various places.

In the virtual world, this thing becomes interesting. Because in the physical world, the first touch between people is more of a "contact touch", followed by a "contactless touch". But in the virtual world, "contactless touch" is very common. Articles, videos, websites and other channels are important ways for us to get to know someone for the first time.

Therefore, in this case, how to efficiently make a good and deep first impression on a potential social object is a **very important proposition** for communication in the virtual world.

This cannot be achieved if it is simply an unthought-out **message pile** - like the smelly, long resumes we often see in our mailboxes. Therefore, there is a need to think further about this matter at the product design level and design products that are more in line with human "social nature" - something that is currently lacking in the DeSocial space.

### 2.2 Structural Hole Theory and "Crossed Souls"
> **structural holes** is a concept from [social network](https://en.wikipedia.org/wiki/Social_network) research, originally developed by [Ronald Stuart](https://en.wikipedia.org/wiki/Ronald_Stuart_Burt) Burt. The study of structural holes spans the fields of sociology, economics, and computer science. Burt introduced this concept in an attempt to explain the origin of differences in [social capital](https://en.wikipedia.org/wiki/Social_capital). Burt’s theory suggests that individuals hold certain positional advantages/disadvantages from how they are embedded in neighborhoods or other social structures. A structural hole is understood as a gap between two individuals who have complementary sources to information.
> -- Wikipedia

![image (6)](https://tva1.sinaimg.cn/large/e6c9d24ely1h2rk3bd4rkj20qv0dejs2.jpg)

Therefore, when designing the SoulCard product, we had to think more fully about how SoulCard could better bring to light the key people who fill the holes in the structure -- people who have often been invisible in the past -- and how it could be a win-win situation for both the key nodes themselves and the social networks they connect to. It's a win-win situation. For example, a key person who is both a Coder & Designer and who is an active participant in both a DevDAO and a DesignDAO has the potential to lead the exchange of resources between the two DAOs, creating new possibilities and new value. In DeSoc, we can name the soul of such a person as **"Cross-Soul "**.

### 2.3 Trust in new cooperative relationships

> In his Philosophy of Money and Foundations of Social Theory, Zimmer suggests that trust is an important condition for exchange mechanisms and a prerequisite for the continuity of sociality. The sociologist James Coleman devotes a large part of his magnum opus, The Foundations of Social Theory, to trust as an important component of social capital (Robert D . Trust helps to increase the efficiency of microeconomic organizations.

Reducing the cost of building trust and eliminating barriers to building trust both require authenticity of information exchange (verified profile) and effectiveness of structure building (short time to the right person, shortest path to the right person).

### 2.4 Decentralized diffusion of DAO brand

Like any other organization, DAOs still need branding. In addition to traditional brand building ideas, DAOs should also consider a more decentralized (and likewise more primitive 😁) approach to communication -

> **Mouth-to-Mouth**

In this case, it is essential to let the DAO develop the Template for the business card, so that each DAO member can be his or her own salesman and also become a DAO salesman by the way. Therefore, in the design of SoulCard, we need to take into account three types of roles.

> **Member:** Promote themselves through SoulCard so as to gain Serendipity by getting more high-quality, interesting person-to-person connections without contact.

> **DAO:** Let Members become their own "salesman", and at the same time make members have a stronger sense of value identification with DAO.

> **Receiver:** People who see SoulCard can quickly and efficiently understand the people they are in contact with and the organizations behind them.

### 2.5 Information Entropy and Value

Traditional resumes and profiles have no mechanism to avoid lengthy, dull information, and the low concentration of effective information reduces the sense of value to the Profile Owner.

The traditional solution is to increase the information density and value of the profile through some resume-related courses, but we believe that this can be solved mechanically - for example, by having the SoulCard Owner provide only the 3 most valuable articles that he/she has written when providing technical articles.

## 0x03 Web3 Stacks

- **Venachain**
   - DAO/Users mint their SoulCards into SoulCard SBTs via Venachain Nework.
- **Arweave Network / IPFS Network**
   - Store SoulCard on the Arweave blockchain network as an immutable page.
   - Then mint the immutable SoulCard into an NFT on any Ethereum compatible network.
- **Moonbeam Network**
   - DAO/Users mint their SoulCards into SoulCard SBTs via Moonbeam Nework.

## 0x04 SoulCard Design

SoulCard is designed as interactive H5 that can export to pic, save to permaweb as IPFS,Arweave, mint into SBTs that can be saw in NFT Wallet / NFT Gallery.

See more Details in:

> https://github.com/WeLightProject/Tai-Shang-Soul-Card/blob/main/contracts/README.md

![SoulCard 的服务_链接 (3)](https://tva1.sinaimg.cn/large/e6c9d24egy1h657gmoh1wj20u00xa40l.jpg)

### 4.1 DAO Soulcard Example

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h657kg5087j20ns1li795.jpg" alt="organization" style="zoom:50%;" />

### 4.2 User Soulcard Example

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h657jixeoaj20ns1jswjc.jpg" alt="Individual" style="zoom:50%;" />

### 4.3 Several state of SoulCard

SoulCard is designed to have the following state:

- **preview state**

The SoulCard is dynamically rendered by the `WYSIWYG editor`。

- **PermaWeb state**

Through the API on FaaS,the soulcard is solidified into `permaweb on IPFS`, which can be embedded and supported in `iframe` applications and pages.

Through the `Arweave Uploader` plugin, the soulcard is solidified into `permaweb on Arweave`, which can be embedded and supported in `iframe` applications and pages.

- **PNG state**

Save as PNG, which can be used in applications and pages that do not support `iframe`.

- **NFT state**

Through DAO's SoulCardContract Addr, the SoulCard Mint in the form of Arweave PermaWeb is converted into NFT, and this NFT needs to be approved by DAO. If the approval is passed, it can be regarded as "certified" by the DAO.

## 0x05 SoulCard Contract

see in `/contracts` in Repo.

SoulCard is a non-standard ERC721 contract, an exploration of `SBTs` (Soul Binding) tokens described in `<<Decentralized Society: Finding Web3's Soul>>`. Its key methods include:

- `claim(username, soulcardPermaWebURL)`

  To apply for an NFT (or SBTs) under the contract, but the applicant will not get the NFT immediately after the application, but needs to be approved by the DAO Owner

- `approveClaim(tokenId)`

  The DAO Owner checks whether the applied SoulCard content is true, and approves the application after verification

- `safeTransferFrom(from, to, tokenId, _data \\nil)`

  Transfers can only be made to the `0x0` address, that is, the `SoulCard` can only be transferred and cannot be destroyed.

## 0x06 Architecture -- dS

`dSS`——`dApp-Snippet` architecture, is a new blockchain application development architecture proposed by NonceGeekDAO.

From an architectural point of view, a "pure" dApp should be a pure front-end application to ensure decentralization:

```
+-----------+     +------------------+     +------------+

| Front-End |-----| Wallet(Metamask) |-----| Blockchain |

+-----------+     +------------------+     +------------+
```

However, in practical situations, dApps often still use some backend services to improve their performance or meet some needs.

For example: get the full amount of NFT data, get some private data from the backend through signatures...

These requirements are often very lightweight. Therefore, starting a backend service on the server in the traditional way would be too "heavy".

In the SoulCard project, we adopted this form of architecture.

Snippets See the Snippets folder under the Repo, which is loaded into **[https://faasbyleeduckgo.gigalixirapp.com/](https://faasbyleeduckgo.gigalixirapp.com/)** to provide backend services for dApps.

![SoulCard Arch](https://tva1.sinaimg.cn/large/e6c9d24egy1h657hb4ki9j216x0u0ady.jpg)

## 0x07 Snippets & Components using in SoulCard

> See API Doc in: https://github.com/WeLightProject/Tai-Shang-Soul-Card/wiki/%E5%90%8E%E7%AB%AF%E6%8E%A5%E5%8F%A3%E8%AE%BE%E8%AE%A1
>
> See Source Codes of Snippets:
>
> https://gist.github.com/leeduckgo/9813ca9e206bbda1afb413ecea331063

```elixir
Snippets:
- SoulCard.UserManager.ex
- SoulCard.InvitationManager.ex
- SoulCard.DataHandler.ex
- SoulCard.IpfsInteractor.ex
- SoulCard.TemplateManager.ex
Components:
- ipfs.ex
- ar_graphql_interactor.ex
- arweave_handler.ex
- mirror_handler.ex
- gist_handler.ex
- kv.ex
- verifier.ex
```

- Snippets:
- Components:
- `ipfs.ex`: for IPFS related operations.
  - `ar_graphql_interactor`, the GraphQL interaction module for the Arweave network.
  - `arweave_handler.ex`, used to interact with Arweave nodes, read and write operations.
  - `mirror_handler.ex`, which handles content stored by the Mirror app on the Arweave network.
  - `gist_handler.ex`, which handles the content in the Gist, such as the SoulCard template stored on the Gist.
  - `github_fetcher.ex`, which analyze the github account of users & DAOs.
  - `kv.ex`, a local K-V database.
  - `verifier.ex`, the information used to verify the metamask signature for authentication.


## 0x08 Tai Shang Portal as Explorer

see in:

> https://github.com/WeLightProject/Tai-Shang-Soul-Card/wiki/Tai-Shang-Portal-as-Explorer

## 0x09 Teams

NonceGeekDAO, cool oriented programming.

> https://noncegeek.com
