
/**
 * Fetches a single asset from the Trainer API.
 *
 * @param assetId - The ID of the asset to fetch.
 * @returns {Promise<TrainerApiAssetObject>} A promise that resolves to the fetched asset object.
 * @throws {Error} Will throw an error if the fetch operation fails.
 */
export async function fetchSingleAsset( assetId : TrainerApiAssetObject['id'] ) : Promise<TrainerApiAssetObject> {
    try {
        const response = await fetch(
            `${ process.env.TRAINER_API_ENDPOINT }/assets/${ assetId }`
        )
        const asset = await response.json()
        return asset as TrainerApiAssetObject
        
    } catch ( error ) {
        if (error instanceof Error) {
            throw new Error(`Something went wrong fetch the asset:\n` + error.message);
        } else {
            throw new Error(`Something went wrong fetch the asset:\n` + String(error));
        }
    }
}

/**
 * Fetches all classes from the Trainer API.
 *
 * @returns {Promise<TrainerApiClassObject[]>} A promise that resolves to an array of TrainerApiClassObject.
 * @throws {Error} Throws an error if the fetch operation fails.
 */
export async function fetchAllClasses() : Promise<TrainerApiClassObject[]> {
    try {
        const response = await fetch(
            `${ process.env.TRAINER_API_ENDPOINT }/classes`
        )
        const classes = await response.json()
        return classes as TrainerApiClassObject[]
        
    } catch ( error ) {
        if (error instanceof Error) {
            throw new Error(`Something went wrong fetch the classes:\n` + error.message);
        } else {
            throw new Error(`Something went wrong fetch the classes:\n` + String(error));
        }
    }
}

/**
 * Fetches single class based on ID from the Trainer API.
 *
 * @returns {Promise<TrainerApiClassObject[]>} A promise that resolves to an array of TrainerApiClassObject.
 * @throws {Error} Throws an error if the fetch operation fails.
 */
export async function fetchSingleClass( classId : TrainerApiClassObject['id'] ) : Promise<TrainerApiClassObject> {
    try {
        const response = await fetch(
            `${ process.env.TRAINER_API_ENDPOINT }/classes/${ classId as string }`
        )
        const data = await response.json()
        return data as TrainerApiClassObject
        
    } catch ( error ) {
        if (error instanceof Error) {
            throw new Error(`Something went wrong fetch the classes:\n` + error.message);
        } else {
            throw new Error(`Something went wrong fetch the classes:\n` + String(error));
        }
    }
}

/**
 * Fetches single trainers info based on ID from the Trainer API.
 *
 * @returns {Promise<TrainerApiTrainerObject[]>} A promise that resolves to an array of TrainerApiTrainerObject.
 * @throws {Error} Throws an error if the fetch operation fails.
 */
export async function fetchSingleTrainer( trainerIdId : TrainerApiTrainerObject['id'] ) : Promise<TrainerApiTrainerObject> {
    try {
        const response = await fetch(
            `${ process.env.TRAINER_API_ENDPOINT }/trainers/${ trainerIdId as string }`
        )
        const data = await response.json()
        return data as TrainerApiTrainerObject
        
    } catch ( error ) {
        if (error instanceof Error) {
            throw new Error(`Something went wrong fetch the trainers info:\n` + error.message);
        } else {
            throw new Error(`Something went wrong fetch the trainers info:\n` + String(error));
        }
    }
}

/**
 * Fetches all trainers from the Trainer API.
 *
 * @returns {Promise<TrainerApiTrainerObject[]>} A promise that resolves to an array of TrainerApiTrainerObject.
 * @throws {Error} Throws an error if the fetch operation fails.
 */
export async function fetchAllTrainers() : Promise<TrainerApiTrainerObject[]> {
    try {
        const response = await fetch(
            `${ process.env.TRAINER_API_ENDPOINT }/trainers`
        )
        const trainers = await response.json()
        return trainers as TrainerApiTrainerObject[]
        
    } catch ( error ) {
        if (error instanceof Error) {
            throw new Error(`Something went wrong fetch the trainers:\n` + error.message);
        } else {
            throw new Error(`Something went wrong fetch the trainers:\n` + String(error));
        }
    }
}