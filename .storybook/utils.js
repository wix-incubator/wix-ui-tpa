const COMPONENT_KIND = 'components';

function getKind(story) {
  return story[1].kind.toLowerCase();
}

function getName(story) {
  const { kind, name } = story[1];
  return (kind + name)
    .toLowerCase()
    .replace(COMPONENT_KIND, '')
    .replace('/', '');
}

function componentsFirst(storyA, storyB) {
  const kindA = getKind(storyA);
  const kindB = getKind(storyB);

  if (kindA !== kindB) {
    if (kindA.startsWith(COMPONENT_KIND)) {
      return -1;
    }
    if (kindB.startsWith(COMPONENT_KIND)) {
      return 1;
    }
  }

  return 0;
}

export function storySort(a, b) {
  let result = componentsFirst(a, b);

  if (result === 0) {
    const nameA = getName(a);
    const nameB = getName(b);
    result = nameA.localeCompare(nameB);
  }

  return result;
}
