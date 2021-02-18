export default function characterLife(obj) {
  if (obj.health >= 0 && obj.health < 15) {
    return 'critical';
  } if (obj.health >= 15 && obj.health <= 50) {
    return 'wounded';
  }
  return 'healthy';
}
