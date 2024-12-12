const regenWall = extend(Wall, "powered-regen-wall", {
  super.update();
   this.health += 0.1 * Time.delta();
   this.health = Math.min(this.health, this.maxHealth);
});
