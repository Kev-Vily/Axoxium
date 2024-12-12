const RegenWall = extends Wall {
static powerConsumption = 0.1; // Power consumption per second

  updateTile() {
    super.updateTile();

    if (this.tile.entity == this) {
      // Consume power and regenerate health
      if (this.tile.block().consumePower(RegenWall.powerConsumption * Time.delta())) {
        this.health += 0.1 * Time.delta();
        this.health = Math.min(this.health, this.maxHealth);
      }
    }
  }
