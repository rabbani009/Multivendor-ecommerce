import { BsFillEmojiFrownFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill } from "react-icons/bs";
import {FaStar} from "react-icons/fa"

export const ratingStars = [
    {
        id: 1,
        icon: FaStar,
        text: "Very Poor"
    },
    {
        id: 2,
        icon: FaStar,
        text: "Poor"

    },
    {
        id: 3,
        icon: FaStar,
        text: "Neutral"
    },
    {
        id: 4,
        icon: FaStar,
        text: "Satisfactory"
    },
    {
        id: 5,
        icon: FaStar,
        text: "Delightful"
    }
];
export const satisfactionRating = [
    {
        id: 1,
        icon: BsFillEmojiFrownFill,
        text: "Negative"
    },
    {
        id: 2,
        icon: BsFillEmojiNeutralFill,
        text: "Neutral"

    },
    {
        id: 3,
        icon: BsFillEmojiSmileFill,
        text: "Positive"
    }
]
