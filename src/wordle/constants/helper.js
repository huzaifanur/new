import four from './words/four.json'
import five from './words/five.json'
import six from './words/six.json'
import seven from './words/seven.json'
import eight from './words/eight.json'
import nine from './words/nine.json'
import ten from './words/ten.json'
import eleven from './words/11.json'

export default function getWordsList(length) {
  switch (length) {
    case 4:
      return four
    case 5:
      return five
    case 6:
      return six
    case 7:
      return seven
    case 8:
      return eight
    case 9:
      return nine
    case 10:
      return ten
    case 11:
      return eleven
    default:
      return five
  }
}
