/**
 * Story Component
 */

import React from 'react'

import CharacterStory from './CharacterStory'

export default class Story extends React.Component {
    render() {
        return (
            <section id="story">
                <div className="container">
                    <article className="main-story">
                        <h1 className="section-title small">故事大綱</h1>
                        <div className="story-narrow">
                            <p>
        千年之前，因為「封神」與「操傀術」的出現，讓瀆信者與尊聖者兩大陣營發起了一場足以毀滅文明的戰爭。為了平息這場滅世之戰，尊聖者的領導者「天尊」作出了一個決定，將遠古時期神族「女媧」用五行晶所提煉，用於補天所剩下的神石「五色石」的封印解開，卻沒想到解開封印所帶來的卻是將一切消除的「天罰」
                            </p>
                            <p>
        沒有力量的人們死去，遠古的技術與知識不斷的消逝。活下的來人，成為了無法使用任何靈能卻又不老不死的「眷族」，而這些眷族們在這天罰之後，決定將這一切爭鬥的原因「靈能」「靈格石」「傀」的知識永遠的隱藏起來。
                            </p>
                        </div>
                        <div className="story-illust">
                            <div className="story-image">
                                <img src="/images/CGs/Story.jpg" />
                            </div>
                            <div className="story-image-description">
                                <h2>神殿外部</h2>
                                <p>
                                    故事發生在冬季的夜晚，主角從神殿遺跡中甦醒並且開始的旅程。
                                </p>
                            </div>
                        </div>
                        <div className="story-narrow">
                            <p>
        千年之後，無法忍受時間的枷鎖禁錮的眷族們，悄悄的開始一個計劃，再次將「五色石」的封印解開，這是否是讓這如同詛咒一般的命運枷鎖解除的計畫？亦或者是，那些對於戰爭瘋狂的眷族，再次乞求混亂的陰謀。
                            </p>
                            <p>
        而遠古兵器「神傀・黑羅剎」就這樣從千年的沈睡中，因為「操傀術」再次被喚醒。而在千年之前，深愛著尊聖者領導人——天尊的半神少女「荷音」，也因為這份瘋狂從沈睡之中再次蘇醒。
                            </p>
                        </div>

                    </article>
                </div>
                <div className="container">
                    <CharacterStory embedLink="https://sketchfab.com/models/7383402efd4f4454be6bb3d0ec0e6172/embed" label="人物介紹">
                        <h2 className="hero">荷音</h2>
                        <p>
                        據說是盤古將靈能與物質兩個處於「混沌」狀態下的世界分離所產生的「陰」的部分，作為人類在人類的世界中生存著，在天罰時期受到影響而陷入沈睡。
                        </p>
                    </CharacterStory>
                    <CharacterStory embedLink="https://sketchfab.com/models/00c55527a24641ebaf8b9e436936d2e2/embed" label="人物介紹" rightMode={true}>
                        <h2 className="hero">黑羅剎</h2>
                        <p>
                            遠古所留下的古代兵器「傀」在現在被作為古代機關人偶所展示，在荷音蘇醒之前被「瀆信者」的眷族喚醒。
                        </p>
                        <p>
                            其中驅動黑羅剎的是作為「陽」的部分掌管兩屆平衡的「陽離」靈魂碎片所製成的靈格石，同時也是荷音的哥哥。
                        </p>
                    </CharacterStory>
                </div>
                <div className="container">
                    <CharacterStory embedLink="https://sketchfab.com/models/e8d16e625b694f4d8ae88b23de8bd4e0/embed" label="小兵" singleMode={true}>
                        <h2 className="hero">傀兵</h2>
                        <p>
                            瀆信者為了強大的兵力，所製造出來的機械傀儡士兵，只聽從主人的命令攻擊指定目標。
                        </p>
                    </CharacterStory>
                    <CharacterStory embedLink="https://sketchfab.com/models/c318f8e46ac24b8a974c5636895ed389/embed" label="小兵" singleMode={true}>
                        <h2 className="hero">重傀</h2>
                        <p>
                            改良傀兵所製造出來的重型機械傀儡士兵，有著厚重裝甲、遠程火砲、近距離作戰能力等。
                        </p>
                    </CharacterStory>
                </div>
            </section>
        )
    }
}
