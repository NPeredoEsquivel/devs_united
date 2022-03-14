import {
    colors
} from "../../hooks/ContextHooks/ProfileContext";

export default function FindTweetAuthorColor(tweetUserProfileColor) {
    return colors.find(color =>
        color.hex === tweetUserProfileColor
    )
}