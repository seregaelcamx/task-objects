export function personUpdate(data) {
    const result = { ...data };

    if (result.gender === 'female') {
        delete result.age;
    } else if (result.gender === 'male' && !('income' in result)) {
        result.income = 100000;
    }

    return result;
}

export function objectFieldsList(obj1, obj2, obj3) {
    const fields = [
        ...Object.keys(obj1),
        ...Object.keys(obj2),
        ...Object.keys(obj3),
    ];
    return [...new Set(fields)].sort();
}

export function objectClone(obj, count) {
    return Array.from({ length: count }, (_, id) => ({
        ...structuredClone(obj),
        id,
    }));
}
