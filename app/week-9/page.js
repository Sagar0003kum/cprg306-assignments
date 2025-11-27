"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-center">
      {/* If user NOT logged in */}
      {!user ? (
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-indigo-400">
            Week 9 – Firebase Auth App
          </h1>
          <p className="text-slate-300">
            Sign in with GitHub to access your Shopping List App
          </p>

          <button
            onClick={gitHubSignIn}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition"
          >
            Sign in with GitHub
          </button>
        </div>
      ) : (
        /* If user IS logged in */
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-indigo-400">
            Welcome, {user.displayName || user.email}
          </h1>

          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile Pic"
              className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-500"
            />
          )}

          <p className="text-slate-400">{user.email}</p>

          <Link
            href="/week-9/shopping-list"
            className="text-indigo-300 hover:underline block"
          >
            Go to Shopping List
          </Link>

          <button
            onClick={firebaseSignOut}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition"
          >
            Log Out
          </button>
        </div>
      )}
    </main>
  );
}
