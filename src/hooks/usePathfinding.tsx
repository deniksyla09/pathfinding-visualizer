import { useContext } from "react"
import { PathfindingContext } from "../context/PathfindingContext"

export const usePathfinding = () => {
    const context = useContext(PathfindingContext)

    if (!context) {
        throw new Error("usePathfinding must be used within a PathfindingProvider")
    }

    return context;
}

//custom react hook that provides easy access to pathfinding context
//this ensures that the hook is used within the pathfinding provider 
//and throw an error if it isnt thus enforcing proper context usage