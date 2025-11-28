"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

// Inline Icons
const GithubIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 18C9 19 9 20 10 20C11 20 11 19 11 18" />
    <path d="M15 18C15 19 15 20 16 20C17 20 17 19 17 18" />
    <path d="M15 22V18C15 16.8 14.8 16.2 14.5 16C14.9 16.3 15.4 16.5 16 16.5C18.2 16.5 19 14.5 19 12C19 9.3 17 8.5 17 7.5C17 7 17.5 5.5 15 5.5C15 5.5 13.9 5.5 12 7C10.1 5.5 9 5.5 9 5.5C6.5 5.5 7 7 7 7.5C7 8.5 5 9.3 5 12C5 14.5 5.8 16.5 8 16.5C8.6 16.5 9.1 16.3 9.5 16C9.2 16.2 9 16.8 9 18V22" />
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" />
  </svg>
);

const ShoppingCartIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="7" cy="20" r="1" />
    <circle cx="17" cy="20" r="1" />
    <path d="M2 2h3l3.6 10.6a2 2 0 0 0 1.9 1.4H17a2 2 0 0 0 1.9-1.4L21 6H6" />
  </svg>
);

const LogOutIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-900 p-8 md:p-12 rounded-xl shadow-xl text-white w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-indigo-400 mb-8 text-center">
          Week 10 Login
        </h1>

        {!user && (
          <>
            <p className="text-gray-300 mb-6 text-center">
              Sign in to access your shopping list.
            </p>
            <button
              onClick={gitHubSignIn}
              className="w-full flex items-center justify-center gap-3
                         bg-indigo-600 hover:bg-indigo-500 py-3 rounded-lg"
            >
              <GithubIcon size={20} />
              <span>Sign in with GitHub</span>
            </button>
          </>
        )}

        {user && (
          <div className="space-y-6 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Welcome</p>
              <p className="font-bold text-lg">{user.displayName}</p>
              <p className="text-indigo-300 text-sm">{user.email}</p>
            </div>

            <Link
              href="/week-10/shopping-list"
              className="w-full flex items-center justify-center gap-3
                         bg-green-600 hover:bg-green-500 py-3 rounded-lg"
            >
              <ShoppingCartIcon size={20} />
              <span>Go to Shopping List</span>
            </Link>

            <button
              onClick={firebaseSignOut}
              className="w-full flex items-center justify-center gap-3
                         bg-red-600 hover:bg-red-500 py-3 rounded-lg"
            >
              <LogOutIcon size={20} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
