var canFinish = function (numCourses, prerequisites) {
    const courseToPrereqMap = {};
    const isOnCurrentPath = {};
    const isVisited = {};

    for (let ii = 0; ii < prerequisites.length; ii++) {
        const [course, prereq] = prerequisites[ii];
        courseToPrereqMap[course] = !courseToPrereqMap[course] ? [prereq] : [...courseToPrereqMap[course], prereq]
    }

    const courseNums = Object.keys(courseToPrereqMap);
    for (let ii = 0; ii < courseNums.length; ii++) {
        const courseNum = courseNums[ii];
        if (hasCycle(courseNum)) {
            return false;
        }
    }

    function hasCycle(courseNum) {
        if (isOnCurrentPath[courseNum]) {
            return true;
        }

        if (isVisited[courseNum]) {
            return false;
        }

        if (!courseToPrereqMap[courseNum] || courseToPrereqMap[courseNum].length === 0) {
            return false;
        }

        isOnCurrentPath[courseNum] = true;
        const prereqs = courseToPrereqMap[courseNum];
        for (let ii = 0; ii < prereqs.length; ii++) {
            const prereqNum = prereqs[ii];
            if (hasCycle(prereqNum)) {
                return true;
            }
        }

        isOnCurrentPath[courseNum] = false;
        isVisited[courseNum] = true;

        return false;
    }

    return true;
}