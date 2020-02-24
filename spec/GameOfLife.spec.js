const GameOfLife = require('../src/GameOfLife');

describe('GameOfLife', () => {
  describe('#with 1x1 dead grid', () => {
    const grid1by1 = "Generation 1:\r\n1 1\r\n.";
    it('returns the right generation number', () => {
      const expectedGenerationNumber = 2;
      expect(GameOfLife.calculateNextGenerationNumber(grid1by1)).toEqual(expectedGenerationNumber);
    });

    it('returns the right grid size', () => {
      const expectedGridSize = "1 1";
      expect(GameOfLife.getGridSize(grid1by1)).toEqual(expectedGridSize);
    });

    it('returns the correct next generation', () => {
      const expectedNextGeneration = "Generation 2:\r\n1 1\r\n.";
      expect(GameOfLife.advanceOneGeneration(grid1by1)).toEqual(expectedNextGeneration);
    });


  });

  describe('#with 1x1 live grid', () => {
    const grid1by1 = "Generation 1:\r\n1 1\r\n*";
    it('returns the right generation number', () => {
      const expectedGenerationNumber = 2;
      expect(GameOfLife.calculateNextGenerationNumber(grid1by1)).toEqual(expectedGenerationNumber);
    });

    it('returns the right grid size', () => {
      const expectedGridSize = "1 1";
      expect(GameOfLife.getGridSize(grid1by1)).toEqual(expectedGridSize);
    });

    it('returns the correct next generation', () => {
      const expectedNextGeneration = "Generation 2:\r\n1 1\r\n.";
      expect(GameOfLife.advanceOneGeneration(grid1by1)).toEqual(expectedNextGeneration);
    });


  });

  describe('#with 2x2 dead grid', () => {
    const grid1by1 = "Generation 1:\r\n2 2\r\n..\r\n..";
    it('returns the right generation number', () => {
      const expectedGenerationNumber = 2;
      expect(GameOfLife.calculateNextGenerationNumber(grid1by1)).toEqual(expectedGenerationNumber);
    });

    it('returns the right grid size', () => {
      const expectedGridSize = "2 2";
      expect(GameOfLife.getGridSize(grid1by1)).toEqual(expectedGridSize);
    });

    it('returns the correct next generation', () => {
      const expectedNextGeneration = "Generation 2:\r\n2 2\r\n..\r\n..";
      expect(GameOfLife.advanceOneGeneration(grid1by1)).toEqual(expectedNextGeneration);
    });


  });

  describe('#with 2x2 live grid', () => {
    const grid1by1 = "Generation 1:\r\n2 2\r\n**\r\n**";
    it('returns the right generation number', () => {
      const expectedGenerationNumber = 2;
      expect(GameOfLife.calculateNextGenerationNumber(grid1by1)).toEqual(expectedGenerationNumber);
    });

    it('returns the right grid size', () => {
      const expectedGridSize = "2 2";
      expect(GameOfLife.getGridSize(grid1by1)).toEqual(expectedGridSize);
    });

    it('returns the correct next generation', () => {
      const expectedNextGeneration = "Generation 2:\r\n2 2\r\n**\r\n**";
      expect(GameOfLife.advanceOneGeneration(grid1by1)).toEqual(expectedNextGeneration);
    });


  });


  describe('#with complex mixed grid', () => {
    const grid1by1 = "Generation 1:\r\n4 8\r\n*.......\r\n....*...\r\n...**...\r\n........";
    it('returns the right generation number', () => {
      const expectedGenerationNumber = 2;
      expect(GameOfLife.calculateNextGenerationNumber(grid1by1)).toEqual(expectedGenerationNumber);
    });

    it('returns the right grid size', () => {
      const expectedGridSize = "4 8";
      expect(GameOfLife.getGridSize(grid1by1)).toEqual(expectedGridSize);
    });

    it('returns the correct next generation', () => {
      const expectedNextGeneration = "Generation 2:\r\n4 8\r\n........\r\n...**...\r\n...**...\r\n........";
      expect(GameOfLife.advanceOneGeneration(grid1by1)).toEqual(expectedNextGeneration);
    });


  });


});
