type TrainerApiUserBase = {
    id: number | string;
    username: string;
    password: string;
    userFirstName: string | null;
    userLastName: string | null;
    createdAt: string;
    updatedAt: string;
}

type TrainerApiClassUserObject = TrainerApiUserBase & {
    Roster: TrainerApiRosterObject;
}

type TrainerApiUserObject = TrainerApiUserBase & {
    classes: TrainerApiClassObject[];
}

type TrainerApiUser = TrainerApiUserObject & TrainerApiClassUserObject;