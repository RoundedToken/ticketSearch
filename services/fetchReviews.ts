export const fetchReview = async (id: string) => {
    const res = await fetch(`${process.env.API_URL}/reviews?movieId=${id}`).then((res) => res);

    return res.json();
};
