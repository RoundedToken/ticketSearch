export const fetchReview = async (id: string) => {
    const res = await fetch(`${process.env.serverUrl}/reviews?movieId=${id}`).then((res) => res);

    return res.json();
};
