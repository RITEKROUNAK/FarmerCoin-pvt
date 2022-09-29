
export const initEntityState = (initialValue, loading = true) => ({
    loading,
    data: initialValue,
    loadFailed: false,
    canceler: null
});
  
export const entityLoadingStarted = (state, canceler) => ({
    ...state,
    canceler,
    loading: true,
    loadFailed: false
});
  
export const entityLoadingSucceeded = (state, data, remap = true) => ({
    ...state,
    data: remap ? remapObject(data) : data,
    loading: false,
    loadFailed: false,
    canceler: null
});
  
export const entityLoadingFailed = (state) => ({
    ...state,
    loading: false,
    loadFailed: true,
    canceler: null
});

export const handleSelection = (selectedIds, selectId, singleSelect = false) => {

    const selected = new Set(selectedIds || []);
    
    if(singleSelect) return new Set([selectId]);

    if (selected.has(selectId)) {
      selected.delete(selectId);
    } else {
      selected.add(selectId);
    }
  
    return selected;
};

export const shuffleArray = (array) => {
    let shuffeled = array;

    for (let i = shuffeled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffeled[i], shuffeled[j]] = [shuffeled[j], shuffeled[i]];
    }

    return shuffeled;
}

export const remapObjectItem = (obj) => {
  if(obj.id && obj.attributes) {
    return {
      id: obj.id,
      ...obj.attributes
    };
  }
}

//remap response object from new strapi v4 API
export const remapObject = (response) => {
  if(!response.length) {
    return recursiveRemap(response);
  }
  return response.map(res => {
    let remapped = recursiveRemap(res);

    return remapped; 
  })
}

const recursiveRemap = (obj) => {
  let remapped = obj;
  if(obj.attributes) {
    remapped = remapObjectItem(obj);
  }

  //loop for each remapped key to remap relation
  for(const parent in remapped) {
    if(typeof remapped[parent] === 'object' && remapped[parent] && remapped[parent].data) {
      remapped[parent] = remapObjectItem(remapped[parent].data);
      //second loop
      for(const child in remapped[parent]) {
        if(typeof remapped[parent][child] === 'object' && remapped[parent][child] && remapped[parent][child].data) {
          remapped[parent][child] = remapObjectItem(remapped[parent][child].data);
        }
      }
    }
  }
  
  return remapped; 
}