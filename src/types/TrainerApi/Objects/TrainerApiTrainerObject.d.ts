type TrainerApiTrainerObjectSimple = {
    id: number | string;
    trainerName: string;
    createdAt: string;
    updatedAt: string;
    assetId: number | string
}

type TrainerApiTrainerObject = TrainerApiTrainerObjectSimple & {
    asset: TrainerApiAssetObject;
}
