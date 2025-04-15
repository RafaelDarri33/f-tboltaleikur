module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/Game.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const Game = ({ username })=>{
    // Upphafsstillingar fyrir leikborðið, boltann og skórinn
    const [paddleY, setPaddleY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(200); // Leikmannspallur (vinstri)
    const [aiPaddleY, setAiPaddleY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(200); // AI pallur (hægri)
    const [ballX, setBallX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(450); // Boltans X-staðsetning
    const [ballY, setBallY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(300); // Boltans Y-staðsetning
    const [ballSpeedX, setBallSpeedX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5); // Hraði boltans á X-ás
    const [ballSpeedY, setBallSpeedY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5); // Hraði boltans á Y-ás
    const [playerScore, setPlayerScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // Leikmannsstig
    const [aiScore, setAiScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // AI stig
    const [gameOver, setGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Ef leikurinn er búinn
    // State fyrir countdown-timerinn og hvort leikurinn hafi byrjað
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3);
    const [gameStarted, setGameStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Notum useRef til að koma í veg fyrir endurteknar kollisjónir og tvöföld stigaskráning
    const collisionCooldownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scoreCooldownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const ballRadius = 5; // Bolti er 10px x 10px (radíus = 5px)
    // Hreyfing leikmannspallsins með örvatökum
    const handleKeyDown = (e)=>{
        setPaddleY((prev)=>{
            if (e.key === 'ArrowUp' && prev > 0) {
                return prev - 10;
            }
            if (e.key === 'ArrowDown' && prev < 500) {
                return prev + 10;
            }
            return prev;
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, []);
    // Ef leikurinn ekki byrjaður (gameStarted er false), lækkum countdownið um 1 í hverri sekúndu
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!gameStarted) {
            if (countdown > 0) {
                const timer = setTimeout(()=>{
                    setCountdown(countdown - 1);
                }, 1000);
                return ()=>clearTimeout(timer);
            } else {
                setGameStarted(true);
            }
        }
    }, [
        countdown,
        gameStarted
    ]);
    // Reiknar út nýja boltahraða í Y átt miðað við hvar boltinn lendir á palli
    const calculateBounceAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((paddleY, ballY)=>{
        const paddleCenter = paddleY + 50; // miðja pallsins (pallinn er 100px hár)
        const ballCenter = ballY + ballRadius; // miðja boltans
        const relativeIntersection = ballCenter - paddleCenter;
        const normalizedRelativeIntersection = relativeIntersection / 50; // 50 = hálfur hæð palls
        return normalizedRelativeIntersection * 1.5; // Stýrir breyttum hraða
    }, [
        ballRadius
    ]);
    // Endurstillir boltann þegar mark er skráð
    const resetBall = (whoGetsBall)=>{
        setBallX(450);
        setBallY(300);
        const baseSpeed = 5;
        setBallSpeedY(baseSpeed);
        if (whoGetsBall === 'player') {
            setBallSpeedX(baseSpeed); // Boltinn fer til hægri
        } else {
            setBallSpeedX(-baseSpeed); // Boltinn fer til vinstri
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!gameStarted) return; // Ekki keyra leiklykkjuna fyrr en teljari er búinn
        const interval = setInterval(()=>{
            // Uppfærum boltastaðsetningu á X ásnum
            setBallX((prevX)=>{
                const newX = prevX + ballSpeedX;
                // Ef boltinn fer út um vinstri hlið (mark fyrir AI)
                if (!scoreCooldownRef.current && newX - ballRadius <= 0) {
                    scoreCooldownRef.current = true;
                    setAiScore((prevScore)=>prevScore + 1);
                    resetBall('player');
                    setTimeout(()=>{
                        scoreCooldownRef.current = false;
                    }, 100);
                    return 450;
                }
                // Ef boltinn fer út um hægri hlið (mark fyrir leikmann)
                if (!scoreCooldownRef.current && newX + ballRadius >= 900) {
                    scoreCooldownRef.current = true;
                    setPlayerScore((prevScore)=>prevScore + 1);
                    resetBall('AI');
                    setTimeout(()=>{
                        scoreCooldownRef.current = false;
                    }, 100);
                    return 450;
                }
                return newX;
            });
            // Uppfærum boltastaðsetningu á Y ásnum og athugum veggja
            setBallY((prevY)=>{
                let newY = prevY + ballSpeedY;
                if (newY <= 0) {
                    newY = 0;
                    setBallSpeedY((prev)=>Math.abs(prev));
                } else if (newY >= 590) {
                    newY = 590;
                    setBallSpeedY((prev)=>-Math.abs(prev));
                }
                return newY;
            });
            // Reiknum miðjuna á boltanum
            const ballCenterX = ballX + ballRadius;
            const ballCenterY = ballY + ballRadius;
            // Kollisjón við leikmannspallinn (vinstri)
            if (!collisionCooldownRef.current && ballCenterX <= 40 && ballCenterY >= paddleY && ballCenterY <= paddleY + 100) {
                collisionCooldownRef.current = true;
                setBallSpeedX((prevSpeed)=>-prevSpeed);
                const bounceAngle = calculateBounceAngle(paddleY, ballY);
                setBallSpeedY(bounceAngle);
                setBallX(41);
                setTimeout(()=>{
                    collisionCooldownRef.current = false;
                }, 50);
            }
            // Kollisjón við AI-pallinn (hægri)
            if (!collisionCooldownRef.current && ballCenterX >= 860 && ballCenterX <= 880 && ballCenterY >= aiPaddleY && ballCenterY <= aiPaddleY + 100) {
                collisionCooldownRef.current = true;
                setBallSpeedX((prevSpeed)=>-prevSpeed);
                const bounceAngle = calculateBounceAngle(aiPaddleY, ballY);
                setBallSpeedY(bounceAngle);
                setBallX(860 - 10);
                setTimeout(()=>{
                    collisionCooldownRef.current = false;
                }, 50);
            }
            // AI pallurinn fylgir miðju boltans
            setAiPaddleY((prev)=>{
                if (ballCenterY > prev + 50 && prev < 500) {
                    return prev + 2;
                } else if (ballCenterY < prev + 50 && prev > 0) {
                    return prev - 2;
                }
                return prev;
            });
            if (playerScore >= 10 || aiScore >= 10) {
                setGameOver(true);
            }
        }, 10);
        return ()=>clearInterval(interval);
    }, [
        gameStarted,
        ballSpeedX,
        ballSpeedY,
        paddleY,
        aiPaddleY,
        playerScore,
        aiScore,
        ballX,
        ballY,
        calculateBounceAngle,
        ballRadius
    ]);
    if (gameOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: 'center',
                fontFamily: 'sans-serif'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: [
                        username,
                        " ",
                        playerScore,
                        " - ",
                        aiScore,
                        " AI"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Game.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: [
                        "Leikurinn er búinn! ",
                        playerScore >= 10 ? username : "AI",
                        " vann!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Game.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    style: {
                        marginTop: '20px',
                        padding: '10px 20px',
                        fontSize: '1.2rem',
                        cursor: 'pointer'
                    },
                    onClick: ()=>{
                        // Endurstilla allar stöður til að byrja leikinn upp úr nýju
                        setPaddleY(200);
                        setAiPaddleY(200);
                        setBallX(450);
                        setBallY(300);
                        setBallSpeedX(5);
                        setBallSpeedY(5);
                        setPlayerScore(0);
                        setAiScore(0);
                        setGameOver(false);
                        setCountdown(3);
                        setGameStarted(false);
                    },
                    children: "Keppa aftur?"
                }, void 0, false, {
                    fileName: "[project]/src/app/Game.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Game.tsx",
            lineNumber: 199,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: 'sans-serif',
            textAlign: 'center',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: [
                    username,
                    " ",
                    playerScore,
                    " - ",
                    aiScore,
                    " AI"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Game.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '900px',
                    height: '600px',
                    margin: 'auto',
                    border: '3px solid #333',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #f0f0f0, #d0d0d0)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    position: 'relative'
                },
                children: [
                    !gameStarted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 10,
                            fontSize: '5rem',
                            color: 'white'
                        },
                        children: countdown > 0 ? countdown : 'GO!'
                    }, void 0, false, {
                        fileName: "[project]/src/app/Game.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            width: '10px',
                            height: '100%',
                            backgroundColor: '#333',
                            borderRadius: '0 4px 4px 0'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/Game.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            width: '10px',
                            height: '100%',
                            backgroundColor: '#333',
                            borderRadius: '4px 0 0 4px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/Game.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '20px',
                            top: paddleY,
                            width: '20px',
                            height: '100px',
                            backgroundColor: '#0077cc',
                            borderRadius: '4px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/Game.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '860px',
                            top: aiPaddleY,
                            width: '20px',
                            height: '100px',
                            backgroundColor: '#cc0000',
                            borderRadius: '4px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/Game.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: ballX,
                            top: ballY,
                            width: '10px',
                            height: '10px',
                            backgroundColor: '#28a745',
                            borderRadius: '50%'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/Game.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Game.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Game.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Game;
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Game$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Game.tsx [app-ssr] (ecmascript)"); // Import Game.tsx frá sama möppu
'use client';
;
;
;
const Home = ()=>{
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [gameStarted, setGameStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Þegar notandi ýtir á takkann, setjum við gameStarted á true ef notendanafnið er ekki tómt.
    const handleStartGame = (e)=>{
        e.preventDefault();
        if (username.trim()) {
            setGameStarted(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            marginTop: '50px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Fótbolta leikurinn!!!"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            !gameStarted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleStartGame,
                style: {
                    marginTop: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontSize: '1.2rem'
                        },
                        children: [
                            "Notendanafn:",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: username,
                                onChange: (e)=>setUsername(e.target.value),
                                placeholder: "Sláðu inn notendanafn",
                                style: {
                                    marginLeft: '10px',
                                    padding: '8px 12px',
                                    fontSize: '1rem',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        style: {
                            padding: '10px 20px',
                            fontSize: '1.2rem',
                            marginLeft: '10px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            transition: 'background-color 0.3s'
                        },
                        onMouseOver: (e)=>e.target.style.backgroundColor = '#218838',
                        onMouseOut: (e)=>e.target.style.backgroundColor = '#28a745',
                        children: "Byrja leik"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this) : // Þegar leikurinn er hafinn, birtist Game.tsx
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Game$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                username: username
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Home;
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__1daadd33._.js.map