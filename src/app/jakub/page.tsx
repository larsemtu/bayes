"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import FormulaLayer from "@/components/FormulaLayer";
import Scene from "@/components/Scene";
import { Input } from "@/components/ui/input";
import styles from "./page.module.css";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youTubeApiPromise: Promise<any> | null = null;

const loadYouTubeApi = () => {
  if (typeof window === "undefined") {
    return Promise.resolve(null);
  }
  if (youTubeApiPromise) {
    return youTubeApiPromise;
  }

  youTubeApiPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve(window.YT);
      return;
    }

    const existing = document.getElementById("youtube-iframe-api");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "youtube-iframe-api";
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }

    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previous === "function") {
        previous();
      }
      resolve(window.YT);
    };
  });

  return youTubeApiPromise;
};

export default function JakubPage() {
  const [password, setPassword] = useState("");
  const [stage, setStage] = useState<"locked" | "playing" | "terminal">(
    "locked"
  );
  const [showVideo, setShowVideo] = useState(false);
  const [fadeVideo, setFadeVideo] = useState(false);
  const [terminalBuffer, setTerminalBuffer] = useState<string[]>([]);
  const [terminalActive, setTerminalActive] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const playerRef = useRef<any>(null);
  const isUnlocked = stage !== "locked";
  const videoId = "abX_CwnYNBc";
  const redirectUrl =
    "https://functionalfitnessgroup.wondr.cc/register?subscription_id=641acbb8-192c-4170-9ab8-001b0a10042c";
  const terminalLines = useMemo(
    () => [
      "[JAKUB] handshake::established",
      "Injecting payload: bayes-core",
      "Trace route: oslo-gateway-01",
      "jakub >> escalate privileges",
      "SYSLOG:: breach detected",
      "fork/exec /usr/bin/ghost",
      "crypto.seed::jakubHH",
      "entropy spike: 0xdeadbeef",
      "protocol::shadowline engaged",
      "bayes prior shift -> 0.94",
      "sigil.trace::JAKUB",
      "root@bayes:~# ./veil.sh --override",
      "packet stream: 128.42 MB/s",
      "system override: ACCEPT",
      "signal lost... rebind jakub",
      "handoff complete",
      "Jakub signal locked",
    ],
    []
  );

  useEffect(() => {
    if (stage !== "locked") return;
    if (password === "jakubHH") {
      setStage("playing");
      setShowVideo(true);
      setFadeVideo(false);
    }
  }, [password, stage]);

  useEffect(() => {
    if (stage !== "playing") return;
    let cancelled = false;

    loadYouTubeApi().then((YT) => {
      if (cancelled || !YT || !document.getElementById("jakub-player")) return;
      if (playerRef.current) {
        playerRef.current.destroy?.();
        playerRef.current = null;
      }

      playerRef.current = new YT.Player("jakub-player", {
        videoId,
        height: "100%",
        width: "100%",
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          playsinline: 1,
          modestbranding: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.mute?.();
            event.target.playVideo?.();
          },
          onStateChange: (event: any) => {
            if (event.data === YT.PlayerState.ENDED) {
              setStage((prev) => (prev === "playing" ? "terminal" : prev));
            }
          },
        },
      });
    });

    const fallback = window.setTimeout(() => {
      setStage((prev) => (prev === "playing" ? "terminal" : prev));
    }, 50_000);

    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
    };
  }, [stage, videoId]);

  useEffect(() => {
    return () => {
      playerRef.current?.destroy?.();
    };
  }, []);

  useEffect(() => {
    if (stage !== "terminal") return;
    setFadeVideo(true);
    playerRef.current?.stopVideo?.();
    const hideTimer = window.setTimeout(() => setShowVideo(false), 800);
    const messageTimer = window.setTimeout(() => setShowMessage(true), 5_000);
    const redirectTimer = window.setTimeout(() => {
      const opened = window.open(redirectUrl, "_blank", "noopener,noreferrer");
      if (!opened) {
        window.location.assign(redirectUrl);
      }
    }, 10_000);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(messageTimer);
      window.clearTimeout(redirectTimer);
    };
  }, [redirectUrl, stage]);

  useEffect(() => {
    if (stage !== "terminal") {
      setTerminalBuffer([]);
      setTerminalActive("");
      setShowMessage(false);
      return;
    }

    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: number | undefined;

    const typeNext = () => {
      if (cancelled) return;
      const line = terminalLines[lineIndex];
      if (charIndex < line.length) {
        setTerminalActive(line.slice(0, charIndex + 1));
        charIndex += 1;
        const delay = 24 + Math.random() * 40;
        timeoutId = window.setTimeout(typeNext, delay);
      } else {
        setTerminalBuffer((prev) => {
          const next = [...prev, line];
          if (next.length > 12) {
            next.shift();
          }
          return next;
        });
        setTerminalActive("");
        charIndex = 0;
        lineIndex = (lineIndex + 1) % terminalLines.length;
        const delay = 120 + Math.random() * 240;
        timeoutId = window.setTimeout(typeNext, delay);
      }
    };

    typeNext();

    return () => {
      cancelled = true;
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [stage, terminalLines]);

  return (
    <div className={styles.page}>
      <Scene />
      <FormulaLayer />

      <div className={styles.content}>
        <div className={styles.portal}>
          {stage === "locked" ? (
            <div className={`${styles.card} ${styles.float}`}>
              <Input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter the key"
                aria-label="Password"
                className={styles.input}
              />
            </div>
          ) : null}

          {isUnlocked && showVideo ? (
            <div
              className={`${styles.videoWrap} ${
                fadeVideo ? styles.videoWrapHidden : ""
              }`}
            >
              <div id="jakub-player" className={styles.video} />
            </div>
          ) : null}

          {stage === "terminal" ? (
            <div className={styles.terminalWrap}>
              <pre className={styles.terminalStream}>
                {terminalBuffer.join("\n")}
                {terminalBuffer.length ? "\n" : ""}
                {terminalActive}
                <span className={styles.cursor}>|</span>
              </pre>
              <div className={styles.terminalNoise} />
              <div className={styles.terminalScan} />
            </div>
          ) : null}

          {showMessage ? (
            <p className={styles.terminalMessage}>
              Sign up to receive 10 free clips to crossfit Oslo
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
