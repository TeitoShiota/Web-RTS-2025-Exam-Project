type TrainerApiSessionObject = {
    userId: TrainerApiUser['id'],
    token: string,
    validUntil: number | string
}