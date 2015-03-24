/**
 * Story Component
 */

import React from 'react'

export default class Story extends React.Component {
    render() {
        return (
            <section id="story" className="container">
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
            </section>
        )
    }
}
