import { fadeIn } from '../animations-utils'


describe('Animation Utils', () => {
  describe('fadeIn', () => {
    it('should return animation config with default delay', () => {
      const animation = fadeIn()
      expect(animation).toEqual({
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay: 0 },
      })
    })

    it('should return animation config with custom delay', () => {
      const animation = fadeIn(2)
      expect(animation).toEqual({
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay: 0.2 },
      })
    })

    it('should multiply delay by 0.1', () => {
      const animation = fadeIn(5)
      expect(animation.transition.delay).toBe(0.5)
    })

    it('should handle zero delay', () => {
      const animation = fadeIn(0)
      expect(animation.transition.delay).toBe(0)
    })

    it('should handle negative delay', () => {
      const animation = fadeIn(-1)
      expect(animation.transition.delay).toBe(-0.1)
    })

    it('should have correct structure', () => {
      const animation = fadeIn(3)
      expect(animation).toHaveProperty('initial')
      expect(animation).toHaveProperty('animate')
      expect(animation).toHaveProperty('transition')
      expect(animation.initial).toHaveProperty('opacity', 0)
      expect(animation.animate).toHaveProperty('opacity', 1)
      expect(animation.transition).toHaveProperty('duration', 0.3)
    })
  })
})

