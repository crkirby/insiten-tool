import filters from "@/filters/filters";
import { random } from 'faker'

describe("Filters", () => {
  describe(".toFiat", () => {
    let number = random.number(), result;
    beforeAll(() => {
      result = filters.toFiat(number)
    })
    it('converts number to Fiat value', () => {
      expect(result).toEqual('$' + number.toLocaleString())
    })
  })
});
