import { createContext, ReactNode, useContext, useState } from 'react';

import { Github } from '../interfaces/github';

interface RepositoryContextProps {
  repositories: Github[];
  handleAddRepository: (repository: Github) => void;
  handleRemoveRepository: (id: number) => void;
}

const RepositoryContext = createContext<RepositoryContextProps>({} as RepositoryContextProps);

interface RepositoryContextProviderProps {
  children: ReactNode;
}

export const RepositoryContextProvider = ({
  children
}: RepositoryContextProviderProps) => {
  const [repositories, setRepositories] = useState<Github[]>([]);

  const handleAddRepository = (repository: Github) => {
    if(!repositories.find(rep => rep.id === repository.id)){
      setRepositories(old => [...old, repository]);
    }
  }

  const handleRemoveRepository = (id: number) => {
    const index = repositories.findIndex(rep => rep.id === id);
    repositories.splice(index, 1);
    setRepositories([...repositories]);  
  }

  return (
    <RepositoryContext.Provider 
      value={{
        repositories, 
        handleAddRepository,
        handleRemoveRepository
      }}>
      {children}
    </RepositoryContext.Provider>
  )
}

export const useRepository = () => {
  return useContext(RepositoryContext);
}