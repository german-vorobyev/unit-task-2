export default function characterLife(obj) {
  if (obj.health >= 0 && obj.health < 15) {
    return 'critical';
  } if (obj.health >= 15 && obj.health <= 50) {
    return 'wounded';
  } if (obj.health > 50) {
    return 'healthy';
  }
  return undefined;
}
