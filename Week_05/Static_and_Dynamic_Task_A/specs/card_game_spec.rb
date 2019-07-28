require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class CardGameTest < MiniTest::Test

  def setup()
    @card1 = Card.new("diamond", 10)
    @card2 = Card.new("diamond", 1)
    @card3 = Card.new("diamond", 13)

    @cards = [@card1, @card2, @card3]
  end

  def test_check_for_ace__false()
    assert_equal(false , CardGame.check_for_ace(@card1))
  end

  def test_check_for_ace__true()
    assert_equal(true , CardGame.check_for_ace(@card2))
  end

  def test_highest_card()
    assert_equal(@card1, CardGame.highest_card(@card1, @card2))
  end

  def test_highest_card__card2()
    assert_equal(@card3, CardGame.highest_card(@card1, @card3))
  end

  def test_cards_total()
    assert_equal("You have a total of 24", CardGame.cards_total(@cards))
  end

end
