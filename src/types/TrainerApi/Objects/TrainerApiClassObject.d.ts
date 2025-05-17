type Weekdays = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

type TrainerApiClassObject = {
    id: number | string;
    className: string;
    classDescription: string;
    classDay: 
        Capitalize<Weekdays> | 
        Lowercase<Weekdays>;
    classTime: string;
    maxParticipants: number;
    createdAt: string;
    updatedAt: string;
    trainerId: TrainerApiTrainerObject['id'];
    assetId: TrainerApiAssetObject['id'];
    trainer: TrainerApiTrainerObject;
    asset: TrainerApiAssetObject;
    users?: TrainerApiUser[];
}