"use client";

import { Component, ErrorInfo, ReactNode } from "react";

export default class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 rounded-lg bg-destructive/10 text-destructive">
          <h2 className="text-title font-semibold mb-2">
            Something went wrong
          </h2>
          <p className="text-body">{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
