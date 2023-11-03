import React from "react";
import { Link } from "react-router-dom";


function ReturnsPolicy() {
    return (
        <>
            Unfortunately we cannot process returns at this time.
            If you are unsatisfied with your purchase we would encourage you to look within yourself,
            to assess where such negatiity may stem from and perhaps work towards banishing
            these thoughts and feelings with the help of your besteller:
            the Amethyst Jelly Gems: vegan gluten free gemstone-inspired imaginary sweets.
            <Link
                to={'/product-details-page/amethyst'}
                className={styles.dropItem}
            > Amethyst Jelly Gems
            </Link> <br />
            . Amethysts are thought to be a source of power and wisedom,
            and are attatched to serenity, trust and grace.
            You may find these virtues helpful in this time of turnmoil,
            and the Amethyst Jelly Gems have been said to help customers achieve up to 100% more
            of these virtures (survey sample size: 1).
        </>
    )
}

export default ReturnsPolicy;