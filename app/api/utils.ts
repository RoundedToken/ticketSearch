export const getById = (entities: any[]) => (id: string) =>
    entities.find((entity: { id: string }) => entity.id === id);
